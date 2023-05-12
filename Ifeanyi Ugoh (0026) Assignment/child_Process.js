//...................CHILD MODULE..................

/*
DESCRIPTION:    The child_process module provides a way to spawn child processes and
                interact with them through stdio(standard input/output). Here's an example
                of spawning a child process with the child_process module:
*/

//EXAMPLE:

const { exec } = require('child_process');

exec('ls -lh /usr', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});













