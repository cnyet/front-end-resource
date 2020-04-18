/**
 * 两数之和 - 给定一个整数数组 nums 和一个目标值 target，
 * 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标
 * 假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素
 * 
 */
function twoSum (nums, target) {
  var num1, num2;
  for (var i = 0; i < nums.length-1; i++) {
    for (var j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        num1 = i;
        num2 = j;
        return [num1, num2];
      }
    }
  }
}

var nums = [2, 7, 11, 15], target = 9;
var res = twoSum(nums, target);  // [0, 1]
console.log(res);