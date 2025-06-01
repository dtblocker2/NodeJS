const express = require('express');
const app = express();

//middle ware is some code that run to perform your task
var myconsolelog = function(req, res, next) {
    console.log('It is middle ware');
    next();
};

var servertime = function (req,res,next){
    req.requestTime = Date.now();
    next()
};

//app.use(myconsolelog);

app.use(servertime);

app.get('/', (req,res) => {
    //res.send("LOL");  //you can only use res.send() one time in a route
    console.log('hello world playing after middleware when you visit localhost:3000');

    res.send("User logging time is:" + req.requestTime);
});

app.listen(3000, () => console.log('Server is running at port 3000'))

//besides request and response there is third parameter ie next this next make us know that work of middleware has been done and control goes bat to app.get