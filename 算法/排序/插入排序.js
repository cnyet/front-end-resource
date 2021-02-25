/**
 * 插入排序 - 不断地将尚未排好序的数插入到已经排好序的部分
 * 冒泡排序中，每一轮排序之后，数组后部分的数是排好序的；插入排序中，每一轮排序之后，数组前部分数是排好序的
 * 原理：首先将数组看成两部分，左边是已经排好序的部分，刚开始只有第一个元素，右边是还没排序的部分
 * 时间复杂度：O(n^2), 空间复杂度：O(1)
 */
var arr = [2, 1, 7, 9, 5, 8];
function sort (arr) {
  var i, j, current;
  // 外层循环是还没排序部分
  for (i = 1; i < arr.length; i++) {
    current = arr[i];
    // 内层循环是已经排序部分
    for (j = i-1; j >= 0 && arr[j]>current; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = current;
  }
  return arr;
}
var res = sort(arr);
console.log(res);