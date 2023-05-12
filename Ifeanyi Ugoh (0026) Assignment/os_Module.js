
// ................OS MODULE..................

/*
DESCRIPTION:    The os module in Node.js provides a way of interacting with the
                operating system in a platform-independent way. It exposes a number of functions that can be used
                to retrieve information about the current operating system, including the CPU architecture, amount
                of free memory, hostname, and more
 */

//EXAMPLE

const os = require('os');

console.log(`CPU architecture: ${os.arch()}`);
console.log(`Free memory: ${os.freemem() / 1024 / 1024} MB`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`OS platform: ${os.platform()}`);
console.log(`Total memory: ${os.totalmem() / 1024 / 1024} MB`);
console.log(`Uptime: ${os.uptime()} seconds`);
















