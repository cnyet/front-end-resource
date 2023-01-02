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
 *
 * AbortController 接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求。
 * 当 abort() 被调用时，这个 fetch() promise 将 reject 一个名为 AbortError 的 DOMException。
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
  const controller = new AbortController(); // 实例化一个
  const signal = controller.signal;
  const len = urls.length; // 请求总数量
  const res = new Array(len).fill(undefined); // 请求结果数组
  const request = new Promise(function(resolve, reject) {
    let sendCount = 0; // 已发送的请求数量
    let finishCount = 0;

    const next = function() {
      if (finishCount >= len) {
        resolve(res);
        return;
      }
      const current = sendCount++ 
      const url = urls[current];
      if (!url) { return }
      console.log(url, '开始请求')
      fetch(url, { signal })
        .then(response => response.json())
        .then(result => {
          const timer = Math.floor(Math.random() * 10) * 1000
          setTimeout(function(){
            finishCount++
            console.log('=>', url, '第'+current+'个请求完成')
            res[current] = result;
            if (current < len) {
              next()
            }
          }, timer)
        })
      }

    while (sendCount < max) {
      next()
    }
  })
  // 请求完成
  request.then(res => {
    callback(res)
  })
  
  return {
    cancel: function() {
      controller.abort();
      console.log('取消所有请求');
    }
  }
}

var urls = ['data/1.json', 'data/2.json', 'data/3.json', 'data/4.json', 'data/5.json', 'data/6.json'];
var max = 4;
var result = sendRequest(urls, max, function(res) {
  console.log('finish', res)
})

document.getElementById('cancel').addEventListener('click', function() {
  result.cancel()
})


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
