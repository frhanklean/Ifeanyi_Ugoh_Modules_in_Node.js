
// .................................READLINE MODULE...............................

/*
DESCRIPTION     The readline module in Node.js provides an interface for reading input from a readable stream
                (such as process.stdin) one line at a time. It is commonly used for building command-line interfaces
                in Node.js applications.
*/

// EXAMPLE:

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});






























