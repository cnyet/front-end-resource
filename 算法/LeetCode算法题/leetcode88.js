/**
 * 合并两个有序数组
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 * 思路：1. 定义3个指针，一个指针指向nums1的最后一个数，一个指向nums2的最后一个数，一个指向合并后的数组的最后一个数
 * 2. 先遍历nums1，比较两个数组的最后末位数字，将较大的数字添加到nums1的末位，然后将较大数字的数组指针和向合并后的数组的指针同时从右向左移一位
 * 3. 如果nums2的长度较大，此时向合并后的数组指针之后的数字顺序不变，将剩下的nums2的数字全部添加到合并后的数组指针的前面
 * 4. 此时合并后的数组的指针和nums1重合，合并结束
 */
var merge = function(nums1, m, nums2, n) {
  var i = m - 1, j = n - 1, k = m + n - 1;
  // 当两个数组都没有遍历完，两个数组指针和合并后的数组指针同时移动
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  // 当unms1先遍历完，将nums2剩下的数字全部添加到k位置
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};