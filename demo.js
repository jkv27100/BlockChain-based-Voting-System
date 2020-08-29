
const http = require('http');
const events = require('events');

// declare server variables
const hostname = '127.0.0.1';
const port = 8000;

//create an object of EventEmitter class from events module
const myEmitter = new events.EventEmitter();

myEmitter.on('ping', function (data) {
    console.log('First event: ' + data);
 });

 // Raising ping event
 myEmitter.emit('ping', 'My first Node.js event has been triggered.');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});