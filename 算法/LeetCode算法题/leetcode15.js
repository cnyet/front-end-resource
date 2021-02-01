/**
 * 三数之和：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组
 * 思路：把求和问题变成求差问题，也就是 a + b + c = 0 => -(a + b) = c
 * 1. 首先排序，采用双指针同时移动缩小移动范围
 * 2. 用两层循环，外层循环确定每次固定数字c，遍历到倒数第三就可以了，内部循环遍历除了c以外的剩下数字
 * 3. 用两个指针指向收尾，每次向中间移动
 * 4. 外层循环如果相邻是两个相同的数字，回出现重复的结果，要跳过循环
 * 5. 内层循环，连续两个相同的左指针或右指针都会重复结果，继续移动指针
 */

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

var threeSum = function(nums) {
  var nums = nums.sort((a, b) => a - b);
  var result = [];
  for (var i = 0; i < nums.length-2; i++) {
    var j = i + 1; // 左指针
    var k = nums.length - 1; // 右指针
    if (i > 0 && nums[i] === nums[i-1]) {
      continue;
    }
    while (j < k) {
      // 三数之和小于0，左指针作右移
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        // 左指针元素重复
        while (j < k && nums[j] === nums[j-1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // 三数之和大于0，右指针作左移
        k--;
        // 右指针元素重复
        while (j < k && nums[k] === nums[k+1]) {
          k--;
        }
      } else {
        // 三数之和等于0
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        // 左指针元素重复
        while (j < k && nums[j] === nums[j-1]) {
          j++;
        }
        // 右指针元素重复
        while (j < k && nums[k] === nums[k+1]) {
          k--;
        }
      }
    }
  }
  return result;
};

var nums = [-1,0,1,2,-1,-4];
var res = threeSum(nums);
console.log(res);