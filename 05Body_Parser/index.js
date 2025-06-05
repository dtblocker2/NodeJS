const bodyParser = require('body-parser');
const express = require('express');

var app = express(); //why we use var here?

app.use(bodyParser.urlencoded({extended: false}));

app.use('/login', express.static(__dirname+"/public")); //servers static files from {cwd}/public directory

app.get('/', (req,res) => {
    res.send("Hello my application");
});

app.post('/login', (req,res) => {
    //use same route as mention in action parameter of form in html
    console.log(req.body.email);
    console.log(req.body)

    //do some database processing eg adding email data to database
    res.redirect('/');

    //after pressing submit we can see email printed in terminal key name comes from class name used in html file

});

app.listen(3000, () => console.log('server is running at 3000'));

//you can use postman to replace need of index.html in public directory just open postman and go to POST -> body then choose x-www-form-unicoded instead of form-data and enter data in key-value format ie (dictionary format use key to print value here eg make key lol and add value 123 and use console.log(req.body.lol) to get its value in json format)