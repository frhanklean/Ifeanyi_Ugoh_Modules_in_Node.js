

// ..........................URL MODULE...........................

/*
DESCRIPTION:    The url module in Node.js provides utilities for URL
                parsing and formatting. It can be used to parse URLs into their component parts,
                and to construct URLs from their component parts. 
*/


//EXAMPLE

const url = require('url');

const myUrl = 'https://www.example.com:8080/path/to/page?query1=value1&query2=value2#fragment';

const parsedUrl = url.parse(myUrl);

console.log(parsedUrl.protocol); // "https:"
console.log(parsedUrl.host); // "www.example.com:8080"
console.log(parsedUrl.hostname); // "www.example.com"
console.log(parsedUrl.port); // "8080"
console.log(parsedUrl.path); // "/path/to/page?query1=value1&query2=value2"
console.log(parsedUrl.pathname); // "/path/to/page"
console.log(parsedUrl.search); // "?query1=value1&query2=value2"
console.log(parsedUrl.query); // "query1=value1&query2=value2"
console.log(parsedUrl.hash); // "#fragment"














