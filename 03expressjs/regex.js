const express = require('express');
app = express();


//Type: GET
//ACCESS: Public
//@Description: description nof this route
app.get('/ab*cd', (req,res) => {
    res.send("I am regex 1.")
});
 //it means all routes start from ab and ending with cd will redirect you to this page '/ab...cd' even '/ab...' is enough to satisfy this but '/...cd' is not enough to redirect you to this page

app.delete('/delete', (req,res) => {
    res.send("HI this is delete.")
});

app.listen(5500, () => {
    console.log('server running at port 5500')
})