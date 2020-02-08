/**
 * 节流函数是在指定的时间内只能执行一次
 * 节流函数实现原理：
 * 通过闭包保存上一次函数执行的时刻，再次执行时用当前时刻跟上一次执行的时刻对比
 * 如果时间间隔大于设定的时间就可以再次执行，否则就节流不让执行
 */
function throttle (fn, wait) {
  var start = Date.now();
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var current = Date.now();
    if (current - start > wait) {
      fn.call(this, args);
      start = Date.now();
    } else {
      console.log('间隔时间太短了');
    }
  }
}

function foo () {
  console.log('节流');
}

throttle(foo, 2000);

/**
 * lodash 的节流函数源码
 * 调用了防抖函数实现
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}