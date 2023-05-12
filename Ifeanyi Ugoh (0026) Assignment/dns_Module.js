
// ...................DNS MODULE ...........................

/*
DESCRIPTION:    The dns module in Node.js provides functions for working with Domain Name System
                (DNS) lookups. You can use this module to resolve domain names to IP addresses,
                perform reverse DNS lookups to get a domain name from an IP address, and perform
                other DNS-related operations.
*/

// EXAMPLE

const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
  console.log(`IP address: ${address}`);
});

































