
// ....................buffer MODULE.......................

/*
DESCRIPTION:    The Buffer module provides a way to work with binary data in Node.js. It allows you to
                allocate a fixed-size block of memory,and read from or write to that memory. Buffers are
                used to represent sequencesof binary data, such as those that might be found in a file,
                network stream, or cryptographic operation.
*/

//EXAMPLE:

const buffer = Buffer.alloc(8);

buffer.write('Hello');

console.log(buffer.toString()); // Output: "Hello"





















