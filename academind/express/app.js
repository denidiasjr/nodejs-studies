const http = require('http');
const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('/users middleware');
  res.send('<h1>Here should be the users list</h1>')
})

app.use('/', (req, res, next) => {
  console.log('/ middleware');
  res.send('<h1>Here we should have the Homepage</h1>')
})

const server = http.createServer(app);
server.listen(3000);
