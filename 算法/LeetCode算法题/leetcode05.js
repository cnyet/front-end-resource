/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 思路：
 * 1. 如果字符串长度为1，则直接返回该字符串
 * 2. 如果字符串长度大于1，则先判断是否为回文，若是回文直接返回
 * 3. 若不是回文，在字符串两端分别定义一个指针，先左移1位右指针，截取字符串若是回文返回
 * 4. 若不是则右移1位左指针，截取字符串若是回文返回，依此循环判断
 */

// 方法1: 时间复杂度过大
var longestPalindrome = function(s) {
  if (s.length === 1) {
    return s;
  }
  if (s.length === 2) {
    return isPalindrome(s) ? s : s[0];
  }
  var result = '';
  var len = s.length;
  for (var i = 0; i <= len; i++) {
    for (var j = len ; j > i; j--) {
      if (isPalindrome(s.slice(i, j))) {
        if (result.length < s.slice(i, j).length) {
          result = s.slice(i, j)
        }
      }
    }
  }
  return result;
};
// 判断是否是回文字符串 babad
function isPalindrome(x) {
  var s = x.toLowerCase();
  var len = x.length;
  for (var i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * 方法2: 动态规划法
 * 思路：
 * 1. 假如用 dp[i][j] 表示字符串从i到j(包含下标j)之间的子字符串：s[i, j], 以 babad 为例，dp[1][3] 就表示：aba
 * 2. 若 dp[i][j] 是回文，可以推导出 s[i] === s[j] 且 dp[i+1][j-1] 也是回文
 * 3. 还要考虑两个边界问题，单字符和两个相同的字符
 */
var longestPalindrome = function(s) {
  var n = s.length;
  var res = ''; // 保存最长子字符串
  var dp = Array.from(new Array(n), () => new Array(n).fill(false)); // 生成一个长度为n二维数组, 默认每一个值都是false
  // 由于要比较子字符串的首位字符和 i+1 和 j-1字符是否相等，所以采用i降序j升序遍历
  for (var i = n - 1; i >= 0; i--) {
    for (var j = i; j < n; j++) {
      // j - i < 2 条件包含子字符串长度是0或1的回文情况
      dp[i][j] = (s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]));
      // 当最长子字符串小于两个字符之间距离时，两个子字符串就是最长回文
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};

console.log(longestPalindrome('dsfsdhadhfkdsdsfsdhadhdsfsdhadhfkddsfsdhadhfkdsahfksadhdsfsdhadhfkdsahfksadhfksddsf'))
