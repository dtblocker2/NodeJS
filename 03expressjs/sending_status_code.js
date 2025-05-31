const express = require('express');
const app = express()

app.get('/', (req,res) => {
    res.status(404).send("NOPE FILE NOT FOUND")
});

app.get('/about', (req,res) => {
    res.status(200).send("this is ok")
});

app.get('/ab*cd', (req,res) => {
    res.status(500).json({error: 'Internal error'} )
});

app.listen(3000, () => console.log("server is running at port: 3000"))