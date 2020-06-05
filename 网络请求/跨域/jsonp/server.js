var http = require('http');
function getParams(url, name) {
  var str = url.split('?')[1];
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var result = str.match(reg);
  if (result !== null) {
    return result[2];
  }
}

http.createServer(function(request, response) {
  var _callback = getParams(request.url, 'callback');
  console.log(_callback);
  var data = {
    code: 0,
    data: 'hello'
  };
  var str = _callback + '(' + JSON.stringify(data) + ')';
  response.end(str);
}).listen(8082);
console.log('server lintening on 8082');