const express = require('express')
const path = require('path')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'EmployeeFinder/app/public')));

require('./EmployeeFinder/app/routing/htmlRoutes.js')(app);
require('./EmployeeFinder/app/routing/apiRoutes.js')(app);

app.listen(PORT, function() {
    console.log(`App is now listening on PORT ${PORT}`)
});