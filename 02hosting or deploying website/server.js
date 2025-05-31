const http = require('http');
const url = require('url');
const fs = require('fs'); //fs means filesystem
const path = require('path');
const { unescape } = require('querystring');

//below is object that define filetypes that will be served
const mimeTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'png': 'image/png',
    'jpg': 'image/jpg',
    'jpeg': 'image/jpeg'
};

//as soon as webrequest is made server check it in directory and then serves it or show error if not found
//request comes from front end and response goes from backend
const server = http.createServer((req,res) => {
    var myuri = url.parse(req.url).pathname;//exact path of file server is looking for

    var file_dir = process.cwd()+'/../resources/product';
    var filename = path.join(file_dir, unescape(myuri)); //unescape is used to get rid to all spaces between word in file name
    console.log('File you are looking for is: '+filename)

    var loadfile;
    try{
        loadfile = fs.lstatSync(filename); //this just loads up your file and it returns output if file has been loaded or not
    }catch (error) {
        res.writeHead(404, {'Content-Type': 'text/plain'}); //404 means server not found
        res.write('File not found: 404');
        res.end()
    }

    if (loadfile.isFile()) {
        var mimeType = mimeTypes[path.extname(filename).split('.').reverse()[0]];
        res.writeHead(200, {'Content-Type': mimeType}); //200 mean response if ok

        var filestream = fs.createReadStream(filename);

        filestream.pipe(res)
    } else if (loadfile.isDirectory()) {
        res.writeHead(302, {Location: 'index.html'}); //302 means we are moving into directory
        res.end()
    } else {
        res.writeHead(500, {'Content-Type': 'text/plain'}); //500 means server error
        res.write('Internal error: 500');
        res.end()
        /**
         * Write head is head part of response like head of post card
         * and write is actual content user will see
         */
    }
})

const port = '5000';
const hostname = '127.0.0.1'
server.listen(port,hostname, () => {
    console.log(`server is running at ${hostname}:${port}`);
})

//instead of doing all above use express js