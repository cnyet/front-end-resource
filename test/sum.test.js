/**
 * sum 方法的测试用例
 * @type {[type]}
 */
var algorithms = require('../js/算法/04.js');
var nums1 = [1,2,3,0,0,0];
var nums2 = [2,5,6];
var m = 3, n = 3;

test('sum测试用例', () => {
  expect(algorithms.merge(nums1, m, nums2, n)).toStrictEqual([1,2,2,3,5,6]);
});