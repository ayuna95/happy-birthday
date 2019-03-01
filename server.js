'use strict'
const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response){
    console.log(request.method, request.url);
    if(request.url == '/style.css'){
        const css = fs.readFileSync('style.css', 'utf8');
        response.end(css)
    } 
    if(request.url == '/bd.jpg'){
        const jp = fs.readFileSync('bd.jpg');
        response.end(jp)
    } 
    if(request.url == '/fonts/13218.otf'){
        const jp = fs.readFileSync('fonts/13218.otf');
        response.end(jp)
    } 
    if(request.url == '/fonts/14651.ttf'){
        const jp = fs.readFileSync('fonts/14651.ttf');
        response.end(jp)
    } 
    else {
        const text = fs.readFileSync('index.html', 'utf8');
        response.end(text);
    }
});


server.listen(process.env.PORT || 3000);
console.log("Server started!")