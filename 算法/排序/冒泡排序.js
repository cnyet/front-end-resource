   /**
 * 冒泡排序
 * 循环遍历数组，前后两个数字比较，较大数字向后排，以此类推，就像气泡上升一样
 * 第一次循环控制循环次数，第二次循环控制循环比较的边界
 */
var arr = [2, 15, 47, 23, 11, 3, 20, 9, 54, 16];
for (var i = arr.length - 1; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    var temp = arr[j];
    if (temp > arr[j+1]) {
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}
console.log(arr);