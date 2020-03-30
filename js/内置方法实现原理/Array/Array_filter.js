/**
 * Array.prototype.filter 实现原理
 * @param {function} fn
 * @param {context} fn 的 this
 * @return {array}
 */
Array.prototype.myFilter = Array.prototype.myFilter || function(fn, context) {
  if (typeof fn !== 'function') {
    throw new TypeError(fn + ' is not a function');
  }
  var arr = this;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var result = fn.call(context, arr[i], i, arr);
    if(result) newArr.push(arr[i]);
  }
  return newArr;
}

var arr = [1, 2, 3, 4, 5];
var sum = arr.myFilter(function(item, index, array) {
  return item > 2;
});
console.log(sum);