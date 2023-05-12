// ...............ZLIB MODULE................

/*
DESCRIPTION:    The zlib module in Node.js provides compression and decompression
                functionalities using the Gzip, Deflate/Inflate, and Brotli
                algorithms. It provides a way to create compressed or decompressed streams,
                as well as methods to compress and decompress buffers.
*/

//EXAMPLE

const zlib = require('zlib');

const text = 'This is some sample text to compress.';

// Compress the text
const compressed = zlib.gzipSync(text);

// Decompress the text
const decompressed = zlib.gunzipSync(compressed).toString();

console.log('Original:', text);
console.log('Compressed:', compressed.toString('base64'));
console.log('Decompressed:', decompressed);

