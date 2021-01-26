/**
 * Array.prototype.reduce 实现原理
 * @param {function} fn
 * fn参数：accumulator (acc) (累计器)
 * fn参数：currentValue (cur) (当前值)
 * fn参数：currentIndex (idx) (当前索引)
 * fn参数：sourceArray (src) (源数组)
 * @param {context} firstValue 是第一次调用 fn 函数时的第一个参数的值，默认使用数组中的第一个元素
 * @return {number}
 */
Array.prototype.myReduce = Array.prototype.myReduce || function(fn, firstValue) {
  var arr = this;
  var accumulator = 0;
  for (var i = 0; i < arr.length; i++) {
    accumulator = fn(accumulator, arr[i], i, arr)
  }
  if (!firstValue) {
    return accumulator
  }
  return accumulator + firstValue;
}

var arr = [1, 2, 3, 4, 5];
var sum = arr.myReduce(function(accumulator, item, index, array) {
  return accumulator + item;
});

console.log(sum);