const fs = require('fs');

// Access command line arg for URL
const URL = process.argv[2];

// Access command line arg for path
const path = process.argv[3];

// Request function used in request example
const request = require('request');
request(URL, (error, response, body) => {

  // Write to file in command line arg 2
  fs.writeFile(path, body, error => {
    if (error) {
      console.log('error:', error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    }
  });
});