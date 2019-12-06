/**
 * bind 实现原理：
 * 保存当前传入的this，即调用apply的方法
 * 将arguments转化为数组，数组第一个元素是this，剩下的元素是参数
 * 返回一个新方法，新方法再将参数列表转化为数组
 * 再将之前保存的this执行apply方法，并传入第一个参数列表剩余的数组和第二个参数列表数组合并
 * bind 方法改变this指向，并返回一个新的函数
 */
Function.prototype.bind = Function.prototype.bind || function() {
  if (typeof this !== 'function') {
    throw new TypeError('this is not function');
  }
  var self = this;
  var rest1 = Array.prototype.slice.call(arguments);
  var context = rest1.shift();
  return function() {
    var rest2 = Array.prototype.slice.call(arguments);
    return self.apply(context, rest1.concat(rest2));
  };
}