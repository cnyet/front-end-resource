/**
 * @title 合并两个有序数组
 * @description 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组
 * 1. 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 
 * 2. 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
exports.merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length)
  nums2.splice(n, nums2.length)
  nums1.push(...nums2)
  return nums1.sort((a, b) => a - b)
};