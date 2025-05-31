//just create const server and write whole code like that in hard way

const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((request,response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
})

server.listen(port, hostname,() => {
    console.log(`Server is running at: ${hostname}:${port}`)
})