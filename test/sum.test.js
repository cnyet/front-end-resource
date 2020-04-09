/**
 * sum 方法的测试用例
 * @type {[type]}
 */
var algorithms = require('../temp/sum.js');
var nums1 = [0,4,3,0];
var nums2 = 0;

test('sum测试用例', () => {
  expect(algorithms.twoSum(nums1, nums2)).toStrictEqual([0, 3]);
});