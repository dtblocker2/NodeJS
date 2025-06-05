const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('index.html', 'utf8', (err, html) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading page');
    }

    const x = 42;
    const updatedHtml = html.replace('<!--X-->', x);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(updatedHtml);
  });
}).listen(3000);
