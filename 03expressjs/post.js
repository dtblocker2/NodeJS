const express = require('express');
const app = express()

app.get('/', (req,res) => {
    res.send("Hello World!")
});

app.get('/about', (req,res) => {
    res.send("<h1>This is about section<h1>")
});

app.post('/login', (req,res) => {
    res.send('login success')
});

//if we use localhost:3000/login directly then it will show error as we need to enter parameter just like we did in FASTAPI


app.listen(3000, () => console.log("server is running at port: 3000"))