/**
 * @title 多数元素
 * @description 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var newNums = Array.from(new Set(nums));
  var result = -1;
  for (var item of newNums) {
    var len = nums.filter(function(i){
      return i == item;
    }).length;
    if (len > (nums.length/2) && len > result) {
      return item;
    }
  }
};

// 测试用例
var arr = [2,2,1,1,1,2,2];
var result = majorityElement(arr);
console.log(result);