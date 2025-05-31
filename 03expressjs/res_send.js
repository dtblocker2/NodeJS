const express = require('express');
const app = express()

app.get('/', (req,res) => {
    res.send("Hello World!") //we can send text
});

app.get('/about', (req,res) => {
    res.send("<h1>This is about section<h1>") //also html
});

app.get('/ab*cd', (req,res) => {
    res.json({user: 'dtblocker', email: 'dk30nov2005@gmail.com'} ) //also json
});

app.listen(3000, () => console.log("server is running at port: 3000"))

/**
 * Some useful responses
 * res.send()
 * res.json()
 * res.end()
 * res.download()
 * res.render()
 * res.redirect()
 * res.status()
 */

/**
 * Some important status codes
 * 200-OK
 * 403-Forbidden
 * 404-File not Found
 * 500-INternal Server error
 */