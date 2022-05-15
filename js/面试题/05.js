/**
 * 请实现如下的函数，可以批量请求数据，所有的URL地址都在urls参数中，
 * 同时可以通过max参数控制请求的并发数，当所有请求结束以后，需要执行callback函数
 * 发请求的函数可以用fetch，任何时候可以调用cancel方法停止请求
 * 考察点：
 * 1. 异步请求
 * 2. 事件轮训
 * 3. 控制请求并发数
 * 4. fetch用法
 * 思路1：递归发送请求
 * 1. 通过一个计数器count记录正在发送请求的数量
 * 2. 定义一个函数专门发送fetch，当任何一个请求返回，立即再发送一个新请求
 * 3. count是正在执行的请求数量，当完成一个请求count-1，立即再发送一个请求count+1，保证每次只有limit个请求正在执行，
 * 4. 只要最后所有的请求都执行完毕 count = 0时，执行 callback 函数
 * 
 * 注意⚠️：Promise.all()并不能控制请求的并发数
 * 原因是 Promise.all() 只是将一组请求同时发送，如果再次发送Promise.all()，中间是不会阻塞的
 * Promise.race() 不能确定最后一次发送请求什么时候完成
 * 
 * @param    {[type]}   urls     string[]
 * @param    {[type]}   max      number
 * @param    {Function} callback () => void
 * @return   {[type]}            { cancel: () => void }
 */

function sendRequest(urls, max, callback) {
  var count = 0; // 记录正在请求的并发数
  var request = function() {
    count++; // 增加一个请求数
    fetch(urls.shift()).then(function() {
      count--;
      if (urls.length) {
        request();
      }
      // 所有请求完成
      if (count === 0) {
        callback();
      }
    });
    // 递归的结束条件
    if (count < max) {
      request();
    }
  }
  request();
}

// sendRequest([1,2,3,4,5], 2, function() {
//   console.log('所有请求发送完毕');
// });

/**
 * 思路2: 
 * 1. 用count记录已经发送的请求数，先并发发送max个请求
 * 2. 当已经发送的请求有任何一个返回，就递归再发一个请求
 * 3. 直到count等于urls长度时，并标识这是最后一个请求了，在最后一个返回中调用callback
 */

function fetchRequest(urls, max, callback) {
  var count = 0; // 记录已经发送的请求数
  var len = urls.length; // 所请请求的个数
  var controller = new AbortController(); // 实例化一个
  var signal = controller.signal;
  // 取消所有请求
  var cancel = function() {
    controller.abort();
    console.log('取消所有请求');
  }
  // 递归发送请求
  var request = function () {
    if (urls.length) {
      count++;
      return send(urls.shift(), signal, count === len).then(function(res){
        if (res === 'done') {
          callback();
        } else {
          request();
        }
      })
    }
  }
  // 1. 先并发请求 max 个请求
  for (var i = 0; i < max; i++) {
    request();
  }
  return {cancel};
}
// 模拟fetch请求
function send (url, signal, status) {
  return new Promise(function(resolve, reject){
    fetch(url, {signal}).then(function() {
      resolve(status ? 'done' : '');
    });
  })
  // return new Promise(function(resolve, reject) {
  //   setTimeout(function() {
  //     resolve(status ? 'done' : '');
  //   }, 2000);
  // });
}

fetchRequest([1,2,3,4,5], 3, function() {
  console.log('请求已完成');
});

// setTimeout(function() {
//   fetchRequest.cancel();
// }, 1000);
