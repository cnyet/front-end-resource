/**
 *  整数反转: 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果
 *  范围：-2^31 <= x <= 2^31 - 1 
 *  思路：
 *  1. 先保存正负号，对符号后面的数字翻转
 *  2. 采用数组的 reverse() 翻转
 *  3. 判断翻转后的数字大小
 *  4. 处理两个边界情况，x 为一位数字时直接返回
 */
var reverse = function(x) {
  var result;
  var max = Math.pow(2, 31);
  // 当为个位数时
  if (x > -10 && x < 10) {
    return x;
  } else {
    var flag;
    var result = x.toString();
    if (/^(\-)/.test(x)) {
      flag = '-';
      result = x.toString().replace(/^(\-)/, '');
    }
    result = result.split('').reverse().join('');
    if (Number(result) < -max || Number(result) > max - 1) {
      return 0;
    }
    if (flag) {
      return -Number(result);
    }
    return Number(result);
  }
};

console.log(reverse(+123));