function sendRequest(urls, max, callback) {
  var count = 0;
  var len = urls.length;
  var controller = new AbortController(); // 实例化一个
  var signal = controller.signal;
  // 取消所有请求
  var cancel = function() {
    controller.abort();
    console.log('取消所有请求');
  }
  var request = function() {
    if (urls.length) {
      count++;
      return send(urls.shift(), count === len).then(function(res){
        if (res === 'done') {
          callback();
        } else {
          request();
        }
      });
    }
  };
  // 1. 先并发请求 max 个url
  for (var i = 0; i < max; i++) {
    request();
  }
  return {cancel};
}

function send (url, status) {
  return new Promise(function(resolve){
    setTimeout(function() {
      resolve(status ? 'done' : '');
    }, 1000);
  })
}

sendRequest([1,2,3,4,5], 3, function() {
  console.log('请求已完成');
});


