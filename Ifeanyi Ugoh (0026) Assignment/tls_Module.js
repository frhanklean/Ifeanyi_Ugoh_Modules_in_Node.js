
// ......................TLS MODULE.......................

/*
DESCRIPTION:    The tls (Transport Layer Security) module in Node.js provides an implementation
                of the TLS and SSL (Secure Sockets Layer) protocols for creating secure server-client
                communication over the internet
*/


//EXAMPLE

const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
};

const server = tls.createServer(options, (socket) => {
  console.log('Server connected:', socket.authorized ? 'authorized' : 'unauthorized');
  socket.write('Welcome to the TLS server!\n');
  socket.setEncoding('utf8');
  socket.on('data', (data) => {
    console.log('Server received data:', data);
    socket.write(`Server received: ${data}\n`);
  });
});

server.listen(8000, () => {
  console.log('TLS server started on port 8000');
});













