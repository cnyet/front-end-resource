/**
 * fetch 是window对象的一个属性，它会返回一个Promise对象
 * 用于发起获取资源的请求，可以替代XHR请求
 */
var myImage = document.querySelector('img');
var myHeaders = new Headers();  // Headers 接口允许您对HTTP请求和响应头执行各种操作
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' 
             };
var myRequest = new Request('https://mdn.github.io/fetch-examples/fetch-request/flowers.jpg');  // Request是web API提供的一个类
// 为了在当前域名内自动发送 cookie，必须提供 credentials 这个选项
fetch(myRequest, {credentials: 'include'}).then(function(response){
   return response.blob();  // 对响应执行 Body.blob 来设置相应的 MIME 类型
}).then(function(response){
  var objectURL = URL.createObjectURL(response);  // URL也是web API提供的一个类，createObjectURL()方法创建一个 Object URL
  myImage.src = objectURL;
});