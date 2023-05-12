
//........................ASSERT MODULE .......................

/*
DISCRIPTION:    Node.js' Assert module offers a collection of assertion functions
                for checking the accuracy of values and expressions in your code.
                It is frequently utilized in unit testing frameworks.

*/


// EXAMPLE:

const assert = require('assert');

function addNumbers(x, y) {
  return x + y;
}

// Use assert to test the addNumbers function
assert.strictEqual(addNumbers(2, 3), 5); // Passes
assert.notStrictEqual(addNumbers(2, 3), 6); // Passes
assert.deepEqual([1, 2, 3], [1, 2, 3]); // Passes
assert.deepStrictEqual([1, 2, 3], [1, '2', 3]); // Fails

















