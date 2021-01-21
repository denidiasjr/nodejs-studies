const fs = require('fs');

const requestHandler = (req, res) => {
  const {
    url,
    method
  } = req;

  if (url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body>');
    res.write('<form action="/message" method="POST">');
    res.write('<input type="text" name="message" />');
    res.write('<button type="submit">Send</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', chunk => {
      body.push(chunk);
    });
    
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log({ body, parsedBody, message });
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });

  }
  
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My page written on Node.js</title></head>');
  res.write('<body>');
  res.write('<h1>Welcome to my page, stranger</h1>');
  res.write('<p>Hope you enjoy it!</p>');
  res.write('</body>');
  res.write('</html>');
  res.end();
};

module.exports = requestHandler;