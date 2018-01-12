
// Importa alguns modulos
var http = require('http');
var app = require('./app');

// Inicia nosso servidor a porta 8000
http.createServer(app.handleRequest).listen(8000);