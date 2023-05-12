
// ........................HTTP2 MODULE.......................

/*
DESCRIPTION:    The http2 module in Node.js provides support for the HTTP/2
                protocol, which is the latest version of the HTTP protocol. HTTP/2 is a binary
                protocol that is designed to be faster and more efficient than HTTP/1.1, which is the
                previous version of the protocol. The http2 module provides functions for creating both
                server and client-side HTTP/2 connections.
*/

//EXAMPLE 

const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
});

server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello, world!</h1>');
});

server.listen(8443, () => {
  console.log('Server listening on https://localhost:8443');
});

























