const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const databaseFilePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  countStudents(databaseFilePath)
    .then(() => {
      res.end();
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(1245, () => {
  console.log('Express server is listening on port 1245');
});

module.exports = app;
