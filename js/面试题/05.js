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
  var url = null;
  var request = function() {
    count++; // 增加一个请求数
    url = urls.shift();
    console.log('正在发送', url);
    fetch(url).then(function() {
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
  request();
}

// sendRequest([1,2,3,4,5], 2, function() {
//   console.log('所有请求发送完毕');
// });

/**
 * 思路2: 循环遍历
 * 1. 用count记录已经发送的请求数，循环遍历urls，每次发送max长度的请求数组
 * 2. 有任何一个请求返回，再次发送一个新的Promise.race()
 * 3. 直到count等于urls长度时，
 * https://blog.csdn.net/qq_33081841/article/details/88583735
 */

async function fetchRequest(urls, max, callback) {
  var count = 0;
  var result = null;
  var send = function (url) {
    return new Promise(function(resolve){
      setTimeout(function() {
        console.log('正在发送', url);
        resolve(url);
      }, 1000);
    });
  }
  while (count <= max) {
    count++;
    result = await send(urls[count]);
    result.then(function(res){
      count--;
    })
  }
  callback();
}

fetchRequest([1,2,3,4,5], 2, function() {
  console.log('所有请求发送完毕');
});

