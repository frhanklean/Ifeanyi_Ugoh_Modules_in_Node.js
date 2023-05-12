
// ........................TTY MODULE ............................

/*
DESCRIPTION:    The tty (Teletypewriter) module in Node.js provides an interface
                for working with terminal devices. It can be used to detect whether a
                process is running inside a terminal, and to control and manipulate the
                terminal's input and output streams.
*/


//EXAMPLE

const tty = require('tty');

if (tty.isatty(process.stdout)) {
  console.log('Process is running in a TTY');
  console.log('TTY name:', process.stdout.isTTY ? process.stdout.getWindowSize() : 'unknown');
  console.log('TTY columns:', process.stdout.columns);
  console.log('TTY rows:', process.stdout.rows);
} else {
  console.log('Process is not running in a TTY');
}



















