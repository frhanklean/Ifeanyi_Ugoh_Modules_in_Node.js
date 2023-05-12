// ...................................DGRAM MODULE.................................

/*
DESCRIPTION:    The dgram module in Node.js provides an implementation of
                UDP (User Datagram Protocol) Datagram sockets. UDP is a connectionless,
                unreliable, and datagram-oriented protocol that can be used to send and
                receive data packets over a network. Datagram sockets allow you to send and
                receive data packets using UDP.
*/

//EXAMPLE:

const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => {
  const address = server.address();
  console.log(`UDP server listening on ${address.address}:${address.port}`);
});

server.on('message', (message, remoteInfo) => {
  console.log(`Received message "${message}" from ${remoteInfo.address}:${remoteInfo.port}`);
});

server.bind(8080);






















