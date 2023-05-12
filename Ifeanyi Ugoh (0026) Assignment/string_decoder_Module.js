
// ...........................STRING DECODER MODULE............................

/*
DESCRIPTION:    The string_decoder module in Node.js provides a way to decode Buffer objects into strings, especially
                when working with non-UTF-8 encodings. It is useful when reading and processing binary data from streams,
                sockets, or other sources.
*/

//EXAMPLE

const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');
const buffer = Buffer.from([0xE2, 0x82, 0xAC]);

console.log(decoder.write(buffer)); // €

























