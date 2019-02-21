$(function() {

const submitInfo = function(event) {
    event.preventDefault();
    const answers = [
        parseInt($('#q1').val().trim(),10),
        parseInt($('#q2').val().trim(),10),
        parseInt($('#q3').val().trim(),10),
        parseInt($('#q4').val().trim(),10),
        parseInt($('#q5').val().trim(),10),
        parseInt($('#q6').val().trim(),10),
        parseInt($('#q7').val().trim(),10),
        parseInt($('#q8').val().trim(),10),
        parseInt($('#q9').val().trim(),10),
        parseInt($('#q10').val().trim(),10)
    ]


    $.ajax({
        method: 'GET',
        url: '/api/employeesList'
    }).then(function(data) {

        let answersArray = [];    

        for (let i = 0; i < data.length; i++) {
            answersArray.push(data[i].scores)
        };
        console.log(answersArray);
        let differenceArray = [];

        answersArray.forEach(function (values) {
            for(let i = 0; i < answersArray.length; i++) {
                differenceArray.push(Math.abs(values[i]-answers[i]))
            }
        })

        console.log(differenceArray)

        let newArray = [];
        for(let i = 0; i < 10; i++){
            newArray[i] = differenceArray.splice(0,10);
        }

        console.log(newArray);

        let arraySum = [];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        for (let i =0; i < newArray.length; i++){
            arraySum.push(newArray[i].reduce(reducer))
        }
        console.log(arraySum);

        let minValue = Math.min.apply(null, arraySum)
        console.log(minValue);
        let indexVal = arraySum.indexOf(minValue);
        console.log(indexVal);

        
        
        $('.modal-title').html(`${data[indexVal].name}`)
        $('.modal-body').html(`<img class="images" src="${data[indexVal].photo}">`)
    })
       

    
};

$('#submitButton').on('click', submitInfo)
});