/**
 * 寻找两个有序数组的中位数, 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 要求时间复杂度为 O(log(m + n))
 * 解题思路：
 */
function findMedianSortedArrays(nums1, nums2) {
  var m = nums1.length;
  var n = nums2.length;
  var k = (m + n) / 2;
  if ((m+n)%2 == 0) {
    var res1 = findKth(nums1, 0, m-1, nums2, 0, n-1, k);
    var res2 = findKth(nums1, 0, m-1, nums2, 0, n-1, k+1);
    return (res1 + res2) / 2;
  } else {
    return findKth(nums1, 0, m-1, nums2, 0, n-1, k+1);
  }
};

function findKth(nums1, l1, h1, nums2, l2, h2, k) {
  var m = h1 - l1 + 1;
  var n = h2 - l2 + 1;
  k = parseInt(k);
  if (m > n) {
    return findKth(nums2, l2, h2, nums1, l1, h1, k);
  }
  if (m == n) {
    return nums2[l2 + k - 1];
  }
  if (k == 1) {
    return Math.min(nums1[l1], nums2[l2]);
  }
  var na = parseInt(Math.min(k/2, m));
  var nb = parseInt(k - na);
  var va = nums1[l1 + na - 1];
  var vb = nums2[l2 + nb - 1];
  if (va == vb) {
    return va;
  } else if (va < vb) {
    return findKth(nums1, l1+na, h1, nums2, l2, l2+nb-1, k-na);
  } else {
    return findKth(nums1, l1, l1+na-1, nums2, l2+nb, h2, k-nb);
  }
}
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 7, 8, 9];
var result = findMedianSortedArrays(arr1, arr2);
console.log(result);