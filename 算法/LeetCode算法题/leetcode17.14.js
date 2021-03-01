/**
 * 最小K个数 - 找出数组中最小的k个数。以任意顺序返回这k个数均可
 * 思路：
 * 
 */

// 0 <= len(arr) <= 100000
// 0 <= k <= min(100000, len(arr))

var smallestK = function(arr, k) {
  if (k === 0 || arr.length === 0) {
    return [];
  }
  if (arr.length === k) {
    return arr;
  }
  var newArr = arr.sort((a, b) => a - b);
  var result = newArr.slice(0, k);
  return result;
};

var arr = [1, 3, 5, 7, 2, 4, 6, 8], k = 4;
console.log(smallestK(arr, k));