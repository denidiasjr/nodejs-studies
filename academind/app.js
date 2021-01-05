const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My page written on Node.js</title></head>');
  res.write('<body>');
  res.write('<h1>Welcome to my page, stranger</h1>');
  res.write('<p>Hope you enjoy it!</p>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);