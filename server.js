const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //process.end();
  console.log(req.method);
});
server.listen(3000);
