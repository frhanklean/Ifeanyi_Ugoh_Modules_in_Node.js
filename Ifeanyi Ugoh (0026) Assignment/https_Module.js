
// ..................HTTP3 MODULE....................

/*
DESCRIPTION:    The https module in Node.js provides an easy-to-use API for making
                HTTPS requests and creating HTTPS servers. HTTPS is a secure
                version of HTTP that uses SSL/TLS encryption to ensure secure
                communication between clients and servers over the internet.
*/

// EXAMPLE

const https = require('https');

const options = {
  hostname: 'www.example.com',
  port: 443,
  path: '/',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();



























