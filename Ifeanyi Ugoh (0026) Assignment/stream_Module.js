
// ...................................stream MODULE.................................

/*
DESCRIPTION:    The stream module provides a way to work with streams of data,
                such as reading from or writing to a file or network socket.Here's
                an example of piping data from one stream to another with the stream module:
*/

//EXAMPLE:

const fs = require('fs');
const zlib = require('zlib');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt.gz');

input.pipe(zlib.createGzip()).pipe(output);






























