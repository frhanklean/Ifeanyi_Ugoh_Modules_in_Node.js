
// ....................NET MODULE....................

/*
DESCRIPTION:    The net module in Node.js provides an asynchronous network API for creating
                stream-based TCP or IPC (Inter-Process Communication) servers and clients. It allows you to create TCP or IPC
                sockets and communicate with other processes or network services using the standard read() and write() methods
                of the socket object
*/


const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(`Received data: ${data.toString()}`);
    socket.write(`Server received data: ${data.toString()}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.on('error', (error) => {
  console.error(error);
});

server.listen(3000, () => {
  console.log('Server started');
});






























