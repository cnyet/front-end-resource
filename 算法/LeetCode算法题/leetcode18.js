/**
 * 四数之和
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，
 * 判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？
 * 找出所有满足条件且不重复的四元组
 * 思路：双指针对撞法
 * 1. 先排序，定义a, b, c, d元素索引，双指针指向最后两个元素c和d
 * 2. a和b
 * 
 */
// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
var fourSum = function(nums, target) {
  var result = [];
  nums.sort((a, b) => a - b); // 排序 [-2, -1, 0, 0, 1, 2]
  var a, b, c, d; // 四个元素索引
  // 左指针a遍历到倒数第4个数为止
  for (a = 0; a < nums.length - 3; a++) {
    // 当a元素和相邻的元素重复时跳过
    if (a > 0 && nums[a] === nums[a-1]) {
      continue;
    }
    // 左指针a的后一个元素b遍历到倒数第3个数为止
    for (b = a+1; b < nums.length - 2; b++) {
      // 当b元素和相邻的元素重复时跳过
      if (b > a+1 && nums[b] === nums[b-1]) {
        continue;
      }
      c = b + 1; // c是第3个元素
      d = nums.length - 1; // d是最后一个元素
      // 边界条件 b < c
      while (c < d) {
        if (nums[a] + nums[b] + nums[c] + nums[d] < target) {
          // 四数之和小于target，左指针右移
          c++;
        } else if (nums[a] + nums[b] + nums[c] + nums[d] > target) {
          // 四数之和大于target，右指针左移
          d--;
        } else {
          // 四数之和等于target
          result.push([nums[a], nums[b], nums[c], nums[d]]);
          while (c < d && nums[c] === nums[c+1]) {
            c++;
          }
          while (c < d && nums[d] === nums[d-1]) {
            d--;
          }
          c++;
          d--;
        }
      }
    }
  }
  return result;
};

var nums = [-3,-2,-1,0,0,1,2,3], target = 0;
console.log(fourSum(nums, target));