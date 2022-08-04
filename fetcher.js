const fs = require('fs');

// Access command line arg for URL
const URL = process.argv[2];

// Access command line arg for path
const path = process.argv[3];

console.log(URL);
console.log(path);

const request = require('request');
request(URL, (error, response, body) => {

  // Write to file in command line arg 2
  fs.writeFile(path, body, error => {
    if (error) {
      console.log('error:', error);
    }
  });

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});