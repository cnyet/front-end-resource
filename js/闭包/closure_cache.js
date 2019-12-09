/**
 * 闭包 - 缓存函数
 * 利用闭包可以缓存的特点，在函数内部用对象保存传入的参数，
 * 如果下次再输入相同的参数，直接从对象里取
 */
function memorize(fn) {
  var cache = {};
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var key = JSON.stringify(args);
    return cache[key] || (cache[key] = fn.apply(fn, args));
  }
}

function add (n) {
  return n + 1;
}

var count = memorize(add);
console.log(count(1));