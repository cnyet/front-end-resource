/**
 * Array.prototype.map 实现原理
 * @param {function} fn
 * fn参数：currentValue 当前值
 * fn参数：currentIndex 当前值索引
 * fn参数：sourceArray 源数组
 * @param {context} fn 的 this
 * @return {array}
 */
Array.prototype.myMap = Array.prototype.myMap || function(fn, context) {
  var arr = this;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var result = fn.call(context, arr[i], i, arr);
    newArr.push(result);
  }
  return newArr;
};

var arr = [1, 2, 3, 4, 5];
var sum = arr.myMap(function(item, index, array) {
  return item * 2;
});
console.log(sum);