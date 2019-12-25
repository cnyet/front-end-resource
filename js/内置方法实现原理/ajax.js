/**
 * ajax 封装了两步操作，
 * 一是用Promise对象执行异步操作，
 * 二是用XMLHttpRequest对象对http协议发送请求的封装
 */
/* 1. Promise执行过程 */
var promise = new Promise(function(resolve, reject) {
  // 异步操作
  setTimeout(function() {
    // 成功
    resolve('ok');
    // 失败
    reject('fail');
  });
});

promise.then(function(res) {
  console.log('resolve: ' + res);
}).catch(function(err) {
  console.log('reject: ' + err);
});
/** ================================================= */
/* 2. XMLHttpRequest执行过程 */
var xhr = new XMLHttpRequest();
var data = {
  name: '',
  password: ''
};
/**
 * 初始化一个请求
 * 第一个参数是请求的http方法，有get、post、put、delete等
 * 第二个参数是发送请求的URL地址
 * 第三个参数是布尔值，默认为true，表示要不要执行异步操作，如果为false，send()直到收到答复前不会返回。如果true，已完成事务的通知。可供事件监听器使用。如果multipart属性为true则这个必须为true，否则将引发异常。
 */
xhr.open('get', url, true);
/**
 * 给制定的HTTP请求头赋值，在这之前确保已经调用open()打开了一个URL，但是还没有调用send()
 * 在服务端设置"Access-Control-Allow-Headers"，允许跨域请求
 * 在服务端设置“Set-Cookie“，可以给浏览器设置cookie
 */
xhr.setRequestHeader('Content-Type', 'application/json');  // 设置传递的数据类型,multipart/form-data是提交表单数据
xhr.responseType = 'json';  // 设置响应文本的类型
xhr.send(data);  // 发送HTTP请求，并传递数据
/**
 * 当 readyState 属性发生变化时执行的回调函数
 * XMLHttpRequest.readyState 属性返回一个 XMLHttpRequest 代理当前所处的状态
 * readyState有五种状态：
 * 0：UNSENT 代理被创建，但尚未调用 open() 方法
 * 1：OPENED  (未发送)，open() 方法已经被调用，send()方法还未被调用
 * 2：HEADERS_RECEIVED (已获取响应头)，send() 方法已经被调用，并且头部和状态已经可获得
 * 3：LOADING (正在下载响应体)，响应体下载中; responseText中已经获取了部分数据
 * 4：DONE (请求完成)，下载操作已完成，整个请求过程已经完毕
 */
xhr.onreadystatechange = function() {
  console.log(xhr.readyState, xhr.status, xhr.statusText);
  if(xhr.readyState == 4){
    var dataSource = xhr.response;
    console.log(dataSource); // 返回结果
  }
}
/** ================================================= */

/**
 * ajax 实现原理
 * @return {[type]} [description]
 */
function ajax (url) {
  var promise = new Promise(function(resolve, reject) {
    var handler = function() {
      if (this.readyState !== 4) {
        return ;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json';
    xhr.send({
      name: ''
    });
    xhr.onreadystatechange = handler;
  });
}

ajax('/api/getByName').then(function(res) {
  console.log('success: ' + res);
}).catch(function(err) {
  console.log('fail: ' + err);
});
