/**
 * call 方法实现原理：
 * 保存当前执行环境的上下文，即调用call的方法
 * 将 arguments 参数列表转化为数组，数组第一个元素是上下文环境context，剩下的元素是参数
 * 临时给context添加属性fn，指向当前调用call的方法，为了保证 fn 的 this 指向 call 的调用者
 * 传入参数执行call方法，返回结果
 * call 方法用传入的目标this和参数列表调用一个方法，如果没有返回值则返回undefined
 */

Function.prototype.call = Function.prototype.call || function() {
  if (typeof this !== 'function') {
    throw new TypeError('this is not a function');
  }
  var args = Array.from(arguments);
  var context = args.shift();  // context得到第一个元素，args失去第一个元素
  // var context = [...arguments].shift();
  context.fn = this;
  var result = context.fn(...args);
  delete context.fn;
  return result;
};