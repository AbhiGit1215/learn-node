const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //process.end();
  //console.log(req.method);
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Test</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>'
    );
    res.write('</html>');
    res.end();
  }
});
server.listen(3000);
