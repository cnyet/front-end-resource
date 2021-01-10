var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  console.log("request from: ", request.url);
  const html = fs.readFileSync('index.html');
  if (request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      // 'Content-Security-Policy': 'default-src http: https:',  // 只允许以http, https方式加载脚本
      // 'Content-Security-Policy': 'default-src \'self\'',  // 允许本域名下文件加载
      // 'Content-Security-Policy': 'default-src \'self\' https://cdn.bootcss.com',  // 允许制定域名下文件加载
      // 'Content-Security-Policy': 'default-src \'self\'; form-action \'self\'',  // 允许form表单在当前域名下提交
      // 'Content-Security-Policy': 'script-src http: https:',  // default-src限制所有的src, script-src只限制script
      'Content-Security-Policy': 'default-src \'self\'; report-uri /report',  // report-uri指定向服务器发送限制请求 /report是请求地址
    });
    response.end(html);
  } else {
    response.writeHead(200, {
      'Content-Type': 'application/javascript',
    });
    response.end('console.log(123)');
  }
}).listen(9000);

console.log("server listening on 9000");