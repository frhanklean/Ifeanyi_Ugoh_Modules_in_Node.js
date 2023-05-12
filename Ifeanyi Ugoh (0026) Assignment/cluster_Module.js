
// .......................CLUSTER MODULE......................

/*
DESCRIPTION:    The cluster module in Node.js allows you to run multiple Node.js processes
                that share the same server port. This is useful for scaling Node.js applications
                across multiple CPU cores and utilizing the full power of a server. The cluster module works by creating
                a master process that spawns worker processes, which can each handle incoming connections and share the workload
*/

// EXAMPLE

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, world!');
  });

  server.listen(8000, () => {
    console.log(`Worker ${process.pid} started`);
  });
}






























