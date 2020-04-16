const http = require("http");
const fs = require("fs");
const url = require("url");
const server = http.createServer(function (req, res) {
    if(req.url === '/'){
        fs.readFile("helloworld.html", function (err,data) {
            res.writeHead(200,{"Content-Type": "Text/html; charset: UTF-8"});
            res.end(data);
        });
    }else if(req.url ==='/hello.png'){
        fs.readFile('hello.png', function (err,data) {
            res.end(data);
        })
    }

});
server.listen(3000, "127.0.0.1");
