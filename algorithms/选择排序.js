/**
 * 选择排序
 * 遍历当前数组元素后面的所有元素，从中找到最小的元素跟当前元素交换位置
 */
var arr = [2, 15, 47, 23, 11, 3, 20, 9, 54, 16];
function selectionSort (arr) {
  var min, temp;
  for (var i = 0; i < arr.length -1; i++) {
    min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
var result = selectionSort(arr);
console.log(result);