var http = require('http');

http.createServer(function(request, response) {
  console.log(request.method);
  var data = 'success';
  var headers = null;
  if (request.url === '/api/a') {
    headers = {
      'Access-Control-Allow-Origin': 'http://localhost:8081',
      'Access-Control-Allow-Headers': 'X-Requested-With',
      'Access-Control-Allow-Credentials': true
    };
  } else if (request.url === '/api/b') {
    headers = {
      'Access-Control-Allow-Origin': 'http://localhost:8081',
      'Access-Control-Allow-Headers': 'X-Requested-With',
      'Access-Control-Allow-Methods': 'PUT,PATCH,DELETE',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Max-Age': '1000',
      'Content-Type': 'application/json;charset=utf-8'
    };
  } else {
    headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With',
    };
  }
  response.writeHead(200, headers);
  response.end(data);
}).listen(8082);
console.log('server lintening on 8082');