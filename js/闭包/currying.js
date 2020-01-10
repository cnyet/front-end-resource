/**
 * 闭包 - 柯里化（部分求值）
 * 把多参数传入的函数拆成只接受第一个参数的单参数函数，再返回调用下一个参数的新函数
 * 作用：参数复用、提前返回、延迟计算
 */
function currying(fn) {
  var rest1 = Array.prototype.slice.call(arguments);
  rest1.shift();  // rest1 删除第一个元素 fn
  return function() {
    var rest2 = Array.prototype.slice.call(arguments);
    return fn.apply(null, rest1.concat(rest2));
  }    
}

function saySomething(name, age, fruit) {
  console.log(`我是${name}, 我${age}岁了, 喜欢吃的水果是${fruit}`);
}
var foo = currying(saySomething, '小明');
foo(12, '苹果');

/**
 * 偏函数 - 根据传入的参数决定真正执行的函数体，
 * 偏函数内部没有真正的逻辑代码，返回的函数中才包含需要执行的代码
 */
function isType(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  }
}
var isString = isType('String');

console.log(isString('hello'));  // true