var http = require('http');
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n');
}).listen(port);

console.log('Server running at http://localhost:' + port + '/');
