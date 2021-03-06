/**
 * 节流函数用于连续触发同一事件，确保在规定的时间段以内只触发一次事件处理函数
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
      fn.apply(this, args);
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