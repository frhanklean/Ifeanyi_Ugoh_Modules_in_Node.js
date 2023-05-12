
// .........................REPL MODULE...........................

/*
DESCRIPTION:    The repl module in Node.js provides a Read-Eval-Print-Loop (REPL)
                environment that allows you to interactively execute JavaScript code
                and see the results in real-time. It is similar to the JavaScript console
                in web browsers or the Python REPL.
*/

//EXAMPLE

const repl = require('repl');

repl.start({
  prompt: '> ',
  eval: (cmd, context, filename, callback) => {
    try {
      const result = eval(cmd);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  }
});














