var http = require('http');

http.createServer(function(request, response) {
  console.log(request.method);
  var data = 'success';
  var headers = null;
  response.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8'
  });
  response.end(data);
}).listen(8082);
console.log('server lintening on 8082');