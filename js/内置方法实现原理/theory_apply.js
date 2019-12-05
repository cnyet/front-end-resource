/**
 * apply 实现原理：
 * 保存当前传入的this指向，即调用apply的方法
 * 将arguments转化为数组，数组第一个元素是this，剩下的元素是参数
 * 将当前 this 绑定到目标this上，执行apply方法，并返回结果
 * apply 方法用传入的目标this和参数列表调用一个方法，如果没有返回值则返回undefined
 */
Function.prototype.apply = Function.prototype.apply || function() {
  if (typeof this !== 'function') {
    throw new TypeError('this is not a function');
  }
  var args = Array.from(arguments);  
  var context = args.shift();  // context得到第一个元素，args失去第一个元素
  // var context = [...arguments].shift();
  var result = context(args);
  return result;
};