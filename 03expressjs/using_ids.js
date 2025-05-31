const express = require('express');
app = express();

app.get('/user/:id1/:id2',(req,res) => {
    res.send(req.params)
    //this will print json like structured list of param in our case it is 'id'
});

//example usage
app.get('/flights/:from-:to', (req,res) => {
    res.send(req.params)
});

app.listen(3000, () => {console.log('server is running at port 3000')})

/**
 * webpage like below is created when i go to localhost:3000/user/{id_name1}/{id_name2}:
 * {
 *     id1:  "{id_name1}",
 *     id2:  "{id_name2}"
 * }
 */