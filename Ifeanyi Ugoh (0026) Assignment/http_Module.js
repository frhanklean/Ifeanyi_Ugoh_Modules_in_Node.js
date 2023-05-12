
// ............................... HTTP MODULE .................................

/*
DESCRIPTION: The http module provides a way to create an HTTP server and
             make HTTP requests. Here's an example of creating an HTTP
             server with the http module:
*/

// EXAMPLE:

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});

































