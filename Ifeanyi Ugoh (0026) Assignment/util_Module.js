
// ...............................UTIL MODULE..........................

/*
DESCRIPTION:    The util module in Node.js provides a set of utility functions for working with
                objects, functions, and other values. It includes functions for formatting strings,
                logging messages, and inspecting objects. 
*/

// EXAMPLE

const util = require('util');

const name = 'John';
const age = 30;

const message = util.format('Hello, my name is %s and I am %d years old.', name, age);

console.log(message); // "Hello, my name is John and I am 30 years old."


























