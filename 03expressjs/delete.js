const express = require('express');
app = express();

app.get('/homepage', (req,res) => {
    res.send("<h1>LOL!!</h1>")
});

app.delete('/delete', (req,res) => {
    res.send("HI this is delete.")
});

app.listen(5500, () => {
    console.log('server running at port 5500')
})