/**
 * 寻找两个正序数组的中位数:
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2
 * 请你找出并返回这两个正序数组的 中位数
 * 思路：
 * 1. 对于有序数组问题，采用双指针法
 * 2. 先合并两个数组，取中间的数字，如何中间是一个数字，则直接返回，如果中间是两个数字，除以2返回
 */
// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 
// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

var findMedianSortedArrays = function(nums1, nums2) {
  var newNums = nums1.concat(nums2).sort(function(a, b){return a - b;});
  if (newNums.length === 1) {
    return newNums[0]
  }
  var len = newNums.length;
  var i = parseInt(len/2);
  if (newNums[i] == newNums[len - i - 1]) {
    return newNums[i];
  } else {
    return (newNums[i] + newNums[len - i - 1]) / 2;
  }
};

var nums1 = [1, 1], nums2 = [1, 2];
console.log(findMedianSortedArrays(nums1, nums2));