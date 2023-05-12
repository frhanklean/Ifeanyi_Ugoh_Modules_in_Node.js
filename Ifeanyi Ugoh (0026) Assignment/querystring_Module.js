
// .......................QUERYSTRING MODULE...........................

/*
DESCRIPTION:    The querystring module in Node.js provides utilities for parsing and formatting URL query strings. It can be used
                to parse the query string of a URL into a JavaScript object, and to serialize a JavaScript object into a query string.
*/

// EXAMPLE

const querystring = require('querystring');

const query = 'foo=bar&baz=qux&hello=world';
const parsed = querystring.parse(query);

console.log(parsed);
// Output: { foo: 'bar', baz: 'qux', hello: 'world' }


























