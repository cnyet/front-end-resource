/**
 * Generator函数
 * 1. Generator函数返回一个遍历器对象，封装了多个内部状态
 * 2. function 关键字和函数名之间有一个 * ，函数体内有 yield表达式，定义不同的内部状态
 * 3. generator函数调用后并不执行，返回的不是函数执行结果，而是指向内部状态的指针对象，也就是遍历器对象（Iterator Object）
 * 4. 必须调用该遍历器对象的 next() ，使得指针移向下一个状态，也就是没调用一次 next() ，指针就继续从上一次停下来的地方开始执行，
 *    直到遇到下一个 yield 或 return 语句。
 */

var fetch = require('node-fetch');
function* gen () {
  var url = 'http://rap2api.taobao.org/app/mock/1484/visiters';
  var result = yield fetch(url);  // 返回一个promise对象
  console.log(result);
}

var g = gen();
var result = g.next();
result.value.then(function(res){
  return res.data;
}).then(function(res){
  g.next(res);
});

