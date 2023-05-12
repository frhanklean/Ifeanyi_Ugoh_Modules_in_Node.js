// ...........................VM MODULE........................

/*
DESDCRIPTION:   The vm module in Node.js allows you to execute JavaScript
                code in a sandboxed environment. This means that the code runs in
                an isolated context and cannot access or modify variables or functions
                defined outside of that context. The vm module is built on top of the
                V8 engine, which is the JavaScript engine used by Node.js and Google Chrome
*/

// EXAMPLE

const vm = require('vm');

const context = {
  x: 10,
  y: 20
};

const code = `
  const sum = x + y;
  console.log(sum);
`;

vm.runInNewContext(code, context);