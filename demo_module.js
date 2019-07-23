const http = require('http');
//외부 모듈 적용하기
var dt = require('./myfirstmodule');
/* 
연결방법 1
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
/*
연결방법 2
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('Hello world!');
}).listen(8080);
*/
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write("the date and time: " + dt.myDateTime());
  res.end('Hello world!');
}).listen(8080);
