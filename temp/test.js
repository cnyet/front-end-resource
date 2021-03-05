function request(urls, limit, done) {
  async function handle () {
    var start = 0;
    var asyncList = [];
    while (start < urls.length) {
      if (start + limit <= urls.length) {
        asyncList = urls.slice(start, start + limit);
        start += limit;
      } else {
        asyncList = urls.slice(start, urls.length);
        start = urls.length;
      }
      await send(asyncList);
    }
    done();
  }
  handle();
}

function send (list) {
  console.log('正在发送', list);
  return new Promise(function(resolve){
    setTimeout(function() {
      resolve(1);
    }, 1000);
  })
}

request(['1', '2', '3', '4', '5'], 2, function() {
  console.log('所有请求发送完毕');
});