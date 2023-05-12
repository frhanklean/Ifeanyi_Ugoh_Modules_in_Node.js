
// .........................fs MODULE..........................

/*
DESCRIPTION: The fs module provides an API for interacting with the file system
             in a way that is consistent across different operating systems. Here's
             an example of reading a file with the fs module:

*/

// EXAMPLE:

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});










