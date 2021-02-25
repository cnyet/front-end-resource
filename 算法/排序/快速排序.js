/**
 * 快速排序
 * 从数组中选择一个基准元素，将所有数组元素与它比较，比它小的放入一个新数组，比它大的放入一个新数组
 * 再对这两个新数组采用相同的做法继续比较
 */
function fastsort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var leftArr = [], rightArr = [];
  var baseIndex = Math.floor(arr.length / 2);
  var base = arr.splice(baseIndex, 1)[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return fastsort(leftArr).concat(base, fastsort(rightArr));
}
var arr = [2, 15, 47, 23, 11, 3, 20, 9, 54, 16];
var result = fastsort(arr);
console.log(result);