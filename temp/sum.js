/**
 * @param {string} s
 * @return {number}
 */
var str = "au";
function lengthOfLongestSubstring(s) {
  if (!s.length) {
    return 0;
  }
  var len = s.length;
  var arr = [];
  var set = null;
  var size = 1;
  for (var i = 0; i < len; i++) {
    var value = s.charAt(i);
    var reg1 = new RegExp((value) + '([^'+value+']+)' + (value), 'g');
    var reg2 = new RegExp((value) + '([^'+value+']*)' + (value), 'g');
    var res1 = s.match(reg1);
    var res2 = s.match(reg2);
    if (res1) {
      arr = arr.concat(res1);
    } else if (res2) {
      arr = arr.concat(res2);
    }
  }
  set = new Set(arr);
  console.log(set);
  set.forEach(function(item) {
    if (item.length > size) {
      size = item.length
    }
  });
  if (size > 1) {
    return size - 1;
  }
  return size;
};

var res = lengthOfLongestSubstring(str);
console.log(res);