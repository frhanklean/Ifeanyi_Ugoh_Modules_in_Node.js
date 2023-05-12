
// ..................................CRYPTO MODULE................................

/*
DESCRIPTION: The crypto module provides cryptographic functionality, such as
             generating hashes and encrypting anddecrypting data. Here's an example
             of generating an MD5 hash with the crypto module:
*/

// EXAMPLE:

const crypto = require('crypto');

const hash = crypto.createHash('md5').update('Hello, World!').digest('hex');

console.log(hash); // Output: "6cd3556deb0da54bca060b4c39479839"

































