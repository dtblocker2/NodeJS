// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // allow requests from browser

app.get('/value', (req, res) => {
  const x = 42; // could be from DB, computation, etc.
  res.json({ x }); // send it as JSON
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
