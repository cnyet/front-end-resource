/**
 * @title 搜索二维矩阵
 * @description 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
 * 1. 每列的元素从上到下升序排列
 * 2. 每列的元素从上到下升序排列
 * @param {number[]} nums
 * @return {number}
 */
var searchMatrix = function(matrix, target) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == target) {
        return true;
      }
    }
  }
  return false;
}

// var searchMatrix = function(matrix, target) {
//   var regExp = new RegExp('(^|,)' + target + '($|,)', 'g');
//   var result = matrix.toString().match(regExp);
//   return result ? true : false;
// };

// 测试用例
var arr = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
var result = searchMatrix(arr, 5);
console.log(result);