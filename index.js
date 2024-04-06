const http = require('http');
const fs = require('fs');
const path = require('path');

// Set the custom port
const PORT = process.env.PORT || 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Read the index.html file
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // If there's an error reading the file, respond with an error message
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      // Otherwise, send the file contents as the response
      res.end(content);
    }
  });
});

// Start the server on the custom port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});