/**
 * 字符串转换成整数
 * 思路：1. 先去掉字符串开头空格
 * 2. 当开头第一个字符时正负号时，将正负号后面连续的数字组合起来
 * 3. 当连续数字后面出现字符串时忽略
 * 4. 有效数字的范围是 -2^31 ~ 2^31-1
 */
var myAtoi = function(s) {
  var max = Math.pow(2, 31) - 1;
  var min = -Math.pow(2, 31);
  var s = s.toString().replace(/^\s+/, '');
  var num = 0;
  var groups = s.match(/([-\+]?\d*).*/);
  if (groups) {
    num = +groups[1];
    if (isNaN(num)) {
      num = 0;
    }
  }
  if (num > max) {
    num = max;
  }
  if (num < min) {
    num = min;
  }
  return num;
};

console.log(myAtoi('-91283472332'));