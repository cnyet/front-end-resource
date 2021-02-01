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
var res1 = toSum(nums, target);  // [0, 1]
console.log(res, res1);

/**
 * 两层循环时间复杂度为 n^2，利用空间换时间，用一层循环减少时间复杂度，
 * 几乎所有的求和都可以转换成求差
 * 思路：在遍历数组时，增加一个map来记录已经已经遍历过的数字以及索引
 * 每遍历到一个新数字，都去map中查询目标值与该新数字的差值是否存在，已经遍历过的数字里
 * 如果出现就结果就有了
 */
function toSum (nums, target) {
  var sub;
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    sub = target - nums[i];
    if (map[sub] !== undefined) {
      return [map[sub], i];
    }
    map[nums[i]] = i;
  }
}