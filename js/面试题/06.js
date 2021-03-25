/**
 * 合并两个函数
 * 思路：
 * 1. 在合并函数内部，用一个变量保存传入的函数1
 * 2. 然后重写函数1为一个立即执行函数，该函数内部执行函数1和2
 * 3. 返回之前保存的函数1，当调用合并函数时，执行一个掺入函数，同时执行两个函数
 */
function mergeFn (fn1, fn2) {
  if (typeof fn1 !== 'function' || typeof fn2 !== 'function') {
    return;
  }
  var merge = fn1;
  fn1 = (function() {
    merge.call(this); // 执行fn2
    fn2.call(this); // 执行fn1
  })()
  return fn1 = merge;
}