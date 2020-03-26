/**
 * 防抖函数
 * 上次执行完成以后，在规定的时间间隔以后才能再次执行
 */
function debounce(fn, delay) {
  var timer = null;
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var context = this;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

/**
 * 节流函数
 * 在规定的时间内只能执行一次
 */
function throttle(fn, wait) {
  var start = Date.now();
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var context = this;
    var current = Date.now();
    if (current - start < wait) {
      console.log('间隔时间小于'+ wait + '毫秒');
    } else {
      fn.apply(context, args);
      start = Date.now();
    }
  };
}

function myNew() {
  var context = Array.prototype.shift.call(arguments);
  var obj = Object.create(context.prototype);
  return function() {
    var result = context.call(obj, ...arguments);
    return result;
  }
}
