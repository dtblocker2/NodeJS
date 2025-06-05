// server.js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const x = 42;
  res.render('index', { x });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
