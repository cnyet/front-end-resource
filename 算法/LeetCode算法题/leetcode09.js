/**
 * 回文数 - 给你一个整数 x ，如果 x 是一个回文整数，返回 ture ；否则，返回 false
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数
 * 思路：1. 回文字符串有对称性的特点，可以用双指针从两端往中间移动做比较
 * 2. 字符串本身可以看做数组，左指针从0开始，每次移动+1，右指针从length-1开始，每次移动-1
 */
var isPalindrome = function(x) {
  var str = x.toString();
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

/**
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * abca, 删除c, 即aba是回文字符串。
 * 思路：1. 在字符串两端采用指针，如果两个指针的字符相等，继续向中间移动
 * 2. 如果两个指针的字符不等，则先删除一个左边字符，即左指针右移一位，右指针不变，然后截取两个指针中间的字符串判断是否回文
 * 3. 如果删除左边字符不等，就删除右边一个字符，即右指针左移一位，再截取中间字符串看是否回文
 */

function validPalindrome (str) {
  var len = str.length;
  var i = 0, j = len - 1;
  // 如果左右指针字符相等
  while (i < j && str[i] === str[j]) {
    i++;
    j--;
  }
  // 左指针右移
  if (isPalindrome(str.slice(i+1, j))) {
    return true;
  }
  // 右指针左移
  if (isPalindrome(str.slice(i, j-1))) {
    return true;
  }
  return false;
} 