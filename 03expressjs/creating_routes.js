const express = require('express');
const app = express() //required to create web server or services

app.get('/', (req,res) => {
    res.send("Hello World!")
}); // the '/' is required

app.get('/about', (req,res) => {
    res.send("<h1>This is about section<h1>")
}); //we can send html from it either by typing or using templating engines jade,ejs,hps etc

// after adding it refreshing page isn't enough we need to restart our server

app.listen(3000, () => console.log("server is running at port: 3000"))
//thats it how simple it is in expressjs
//go to 127.0.0.1:3000 or localhost:3000

/**
 * you can also use localhost:3000/ to get same page
 */

/**
 * Home works:
 * create contact and services
 */