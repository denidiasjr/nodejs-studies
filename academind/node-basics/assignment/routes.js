
const requestHandler = (req, res) => {
  const {
    url,
    method
  } = req;

  if (url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Greeting page</title></head>');
    res.write('<body>');
    res.write('<h1>Hello my friend!</h1>')
    res.write('<form method="POST" action="/create-user">')
    res.write('<input type="text" name="username" />')
    res.write('<button type="submit">Register</button>')
    res.write('</form>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Users page</title></head>');
    res.write('<body>');
    res.write('<h1>Users</h1>')
    res.write('<ul>');
    res.write('<li>Periclao</li>');
    res.write('<li>Zeca Pagodinho</li>');
    res.write('<li>Salgadinho</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', chunk => {
      body.push(chunk);
    })

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log({ username });
      res.setHeader('Content-type', 'text/html');
      res.write('<html>');
      res.write('<head><title>User registered successfully</title></head>');
      res.write('<body>');
      res.write('<h1>Users</h1>')
      res.write('<ul>');
      res.write('<li>Periclao</li>');
      res.write('<li>Zeca Pagodinho</li>');
      res.write('<li>Salgadinho</li>');
      res.write(`<li>${username}</li>`);
      res.write('</ul>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    })
  }
}

module.exports = requestHandler;