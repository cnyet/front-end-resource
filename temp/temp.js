/**
 * 防抖函数
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
  }
}
/**
 * 节流函数
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
/**
 * bind
 */
function bind () {
  if (typeof this === 'function') {
    throw new TypeError('this is not a function.');
  }
  var fn = this;
  var args = Array.prototype.slice.call(arguments);
  var context = args.shift();
  return function() {
    return fn.apply(context, [...args, ...arguments]);
  };
}

/**
 * call
 */
function call() {
  if (typeof this === 'function') {
    throw new TypeError('this is not a function.');
  }
  var args = Array.from(arguments);
  var context = args.shift();
  context.fn = this;
  var result = context.fn(...args);
  delete context.fn;
  return result;
}

/**
 * apply
 */
function apply () {
  if (typeof this === 'function') {
    throw new TypeError('this is not a function.');
  }
  var args = Array.from(arguments);
  var context = args.shift();
  context.fn = this;
  var result = context.fn([...args]);
  delete context.fn;
  return result;
}

function myNew () {
  var fn = Array.prototype.shift.call(arguments);
  var newObj = Object.create(fn.prototype);
  return function() {
    return fn.apply(newObj, [...arguments]);
  }
}

myNew (Person)()