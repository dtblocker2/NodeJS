const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index'); // Or use res.send('I am working fine...');
});

app.listen(port, () => console.log(`Server is running at Port: ${port}`));