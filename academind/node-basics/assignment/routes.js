
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
    res.end();
  }
}

module.exports = requestHandler;