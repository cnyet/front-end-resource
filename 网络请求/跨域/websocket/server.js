var WebSocket = require('ws');
var wss = new WebSocket.Server({port:3000});

wss.on('connection',function(ws) {
  ws.on('message', function (data) {
    console.log(data);
    ws.send('socket from server')
  });
});