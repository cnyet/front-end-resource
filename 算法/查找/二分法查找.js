/**
 * 二分法查找：
 * 前提：元素必须是有序数组
 * 原理：用给定值k先与中间结点的关键字比较，中间结点把线形表分成两个子表，
 * 若相等则查找成功；若不相等，再根据k与该中间结点关键字的比较结果确定下一步查找哪个子表，
 * 这样递归进行，直到查找到或查找结束发现表中没有这样的结点。
 * 时间复杂度：O(log2n)
 * mid = (low + high) / 2 = low + (high - low) / 2
 */
function halfSearch (arr, num) {
  var count = 1;
  var min = 0, max = arr.length - 1;
  var mid = 0;
  while (min < max) {
    mid = parseInt((max + min) / 2);
    if (arr[mid] < num) {
      // 中间数小于查找数时
      min = mid + 1;
      count++;
    } else if (arr[mid] > num) {
      // 中间数大于查找数时
      max = mid - 1;
      count++;
    }
    if (arr[mid] === num) {
      // 中间数等于查找数时退出
      break;
    }
    if (arr[min] > num) {
      // 找不到查找数
      return null;
    }
  }
  return count;
}
// 二分查找值为 48 的结点时，查找成功需要比较的次数（ ）
var arr = [1, 5, 8, 11, 19, 22, 31, 35, 40, 45, 48, 49, 50];
console.log(halfSearch(arr, 48));