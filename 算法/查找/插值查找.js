/**
 * 插值查找法：
 * 前提：元素必须是有序数组
 * 原理：
 * 二分查找的优化版本，将查找点从固定的二分改为自适应，缩小查找范围，减少查找次数
 * 数据量较大，关键字分布比较均匀插值查找较快，关键字分布不均匀的情况下，二分法查找较快
 * 时间复杂度和空间复杂度: O(log2(log2n))
 * mid = low + (key - a[low]) / (a[high] - a[low]) * (high - low)
 */
function appendSearch (arr, num) {
  var count = 0;
  var mid, min = 0, max = arr.length - 1;
  while (min < max) {
    mid = min + (num - arr[min]) / (arr[max] - arr[min]) * (max - min);
    mid = parseInt(mid);
    if (arr[mid] < num) {
      min = mid + 1;
      count++;
    }
    if (arr[mid] > num) {
      max = mid - 1;
      count++;
    }
    if (arr[mid] === num) {
      return ++count;
    }
    if (arr[min] > num) {
      return null;
    }
  }
  return count;
}

// 插值查找值为 48 的结点时，查找成功需要比较的次数（ ）
var arr = [1, 5, 8, 11, 19, 22, 31, 35, 40, 45, 48, 49, 50];
console.log(appendSearch(arr, 50));