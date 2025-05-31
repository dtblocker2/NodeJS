//Hard Way

const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

http.createServer((request,response) => {
    //header of server with response is just plain text
    response.writeHead(200, {'Content-Type': 'text/plain'});//write status code in it like 404(not found), 200(sucessfull) etc. write json in Content-Type to process json file as response

    response.end('Hello World!');

    //server is created, but is not listening, now use chaining to listen
}).listen(port, hostname,() => {
    console.log(`Server is running at: ${hostname}:${port}`)
})

/**
 * use 'node server.js' to run the file
 * then go to port 127.0.0.1:5000 (or localhost:5000)
 * use ctrl+C to stop server
 */