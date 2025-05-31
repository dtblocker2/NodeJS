const express = require('express');
app = express();

//pehle request hoti hai fir response aata hai
app.get('/',(req,res) => {
    res.send('this is home page. <a href="/about">This is to check if this hyperlink will send you to about section</a>')//yes link works like these
});

app.get('/about',(req,res) => {
    res.send('this is about page')
});

app.get('/contact',(req,res) => {
    res.send('this is contact page')
});


app.get('/services',(req,res) => {
    res.send('this is services page')
});

app.listen(3000, () => {console.log('server is running at port 3000')})
