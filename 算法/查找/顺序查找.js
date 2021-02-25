/**
 * 顺序查找法：
 * 前提：元素必须是有序数组，适合于存储结构为顺序存储或链接存储的线性表
 * 原理：
 * 从线性表的一端开始，顺序扫描，依次将扫描的结点与给定的K值比较。
 * 时间复杂度和空间复杂度: O(n)
 */
function lineSearch (arr, num) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] === num) {
      return count;
    }
  }
  return null;
}

var arr = [1, 3, 5, 6, 8, 9, 45, 56, 78, 86, 95];
console.log(lineSearch(arr, 4));