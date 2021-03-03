/**
 * 合并区间 - 合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间
 * 思路：
 * 1. 先根据每个区间第一个数字大小排序集合中的所有区间数组
 * 2. 定义一个最终合并后的数组result，循环遍历源数组，每次跟result最后一个元素比较
 * 3. 取两个数组[0]数字的较小作为合并后[0], 较大数字作为合并后[1]
 * 4. 追加合并后数组之前先删除result最后一个元素
 */
var merge = function(intervals) {
  var arr = intervals.sort((a, b) => a[0] - b[0]); // 区间第一个数字从小到大排序
  var result = []; // 保存最终合并后的数组
  for (var i = 0; i < arr.length; i++) {
    var temp = result.slice(-1)[0]; // 取result最后一个元素
    if (temp && temp[1] >= arr[i][0]) {
      var min = Math.min(temp[0], arr[i][0]);
      var max = Math.max(temp[1], arr[i][1]);
      result.pop();
      result.push([min, max]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

var intervals = [[1,3],[2,6],[8,10],[15,18]];  // [[1,6],[8,10],[15,18]]
console.log(merge(intervals));