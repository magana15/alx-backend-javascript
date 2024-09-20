const http = require('http');
const countStudents = require('./3-read_file_async');
const fs = require('fs');

const databaseFilePath = process.argv[2];

const app = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    
    countStudents(databaseFilePath)
      .then(() => {
        res.end(); 
      })
      .catch((error) => {
        res.end(error.message); 
      });
  }

  else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
