let employeesList = require("../data/employees.js");

module.exports = function(app) {

    app.get('/api/employeesList', function(req, res) {
        res.json(employeesList)
    });

    app.post('/api/employeesList', function(req, res) {
        res.json(employeesList)

        res.end()
    });
};