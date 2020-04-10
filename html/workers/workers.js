function fn(wait) {
  var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(wait + 1);
    }, wait * 1000);
  });
  return promise;
}
for (var i = 0; i < 20; i++) {
  fn(i).then(function(value) {
    postMessage(value);
    console.log('第' + value + '秒');
  });
}