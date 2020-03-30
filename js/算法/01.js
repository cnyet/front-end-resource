/**
 * @title 只出现一次的数字
 * @description 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var set = new Set(nums);
  var result = -1;
  set.forEach(function(item) {
    var index = nums.indexOf(item);
    if (index == nums.lastIndexOf(item)) {
      result = item;
    }
  })
  return result;
};

// 测试用例
var arr = [4,1,2,1,2];
var result = singleNumber(arr);
console.log(result);