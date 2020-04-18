/**
 * 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度
 * @param {string} s
 * @return {number}
 * 时间复杂度：O(n), 空间复杂度：O(n)
 */
var str = "deabca";
function lengthOfLongestSubstring(s) {
  var set = new Set();
  var max = 0, i = 0, j = 0;
  for(i=0; i < s.length; i++) {
    while(set.has(s.charAt(i))) {
      set.delete(s.charAt(j));
      j++;
    }
    set.add(s.charAt(i));
    max = Math.max(set.size, max);
  }
  return max;
};

var res = lengthOfLongestSubstring(str);
console.log(res);