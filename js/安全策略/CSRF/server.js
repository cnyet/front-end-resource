var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var util = require('util');
var url = require('url');

http.createServer(function(request, response) {
  console.log('request method: ', request.method);
  const cookie = request.headers.cookie;
  const referer = request.headers.referer;
  // 验证 referer
  // if (referer === 'http://localhost:8000/') {
  //   const html = fs.readFileSync('index.html');
  //   response.end(html);
  // } else {
  //   response.writeHead(403, {
  //     'Content-Type': 'text/html; charset=utf-8'
  //   });
  //   response.end('403');
  // }
  if (request.method === 'GET') {
    var params = url.parse(request.url, true).query;
    console.log('request params: ', params);
  } else if (request.method === 'POST') {
    var post = '';
    request.on('data', function(chunk){    
      post += chunk;
    });
    request.on('end', function(){    
      post = querystring.parse(post);
      console.log(util.inspect(post));
    });
  } else {
  }
  const html = fs.readFileSync('index.html');
  response.end(html);
}).listen(9000);

console.log("server listening on 9000");