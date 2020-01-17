/**
 * $.Deferred() 返回一个Deferred对象
 */

function waitHandle() {
  var dtd = $.Deferred();
  var wait = function (dtd) {
    var task = function() {
      dtd.resolve('success');  // 表示异步操作完成
      // dtd.reject();  // 表示异步操作失败
    };
    // 异步操作的内容
    // 1. 
    // 2. 
    // 3.
    setTimeout(task, 1000);
    return dtd;   // 返回deferred对象
  };
  // 返回闭包
  return wait(dtd);
}

var deferred = waitHandle();
deferred.then(function(res) {
  console.log('success');
}, function(err) {
  console.log('fail');
});
