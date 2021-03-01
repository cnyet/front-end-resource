/**
 * Z 字形变换: 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列
 * 思路：可以看做一个数列问题，找到行数和每行字符索引的规律即可
 * 1. 以4行为例，看做把一行字符串弯曲成N字型，能填充在一个表格里
 * 2. 先看第一行字符索引：0 6 12，等差数列，4行时相差6，3行时相差4，索引跟行数的规律是: 2n-2
 * 3. 第二行字符索引：1 5 7 11 13，结合第一行字符索引得出，第一行索引除以6余数都是0，第二行索引除以6得1或5
 * 4. 第三行索引除以6得2或4，第四行索引除以6得3
 * 5. 也就是第一行和最后一行余数都是0，中间两行余数是行数或者是6减去行数
 */

// 条件1: 1 <= s.length <= 1000
// 条件2: s 由英文字母（小写和大写）、',' 和 '.' 组成
// 条件3: 1 <= numRows <= 1000

 // P(0)     I(6)         N(12)
 // A(1)   L(5) S(7)   I(11)  G(13)
 // Y(2) A(4)   H(8) R(10)
 // P(3)        I(9)

// P   A   H   N
// A P L S I I G
// Y   I   R

var convert = function(s, numRows) {
  // 两种特殊情况：字符串长度小于等于行数，行数为1
  if (s.length <= numRows || numRows === 1) {
    return s;
  }
  var result = '';
  var ret = 2 * numRows - 2;
  for (var i = 0; i < numRows; i++) {
    for (var j = i; j < s.length; j++) {
      if (j % ret === i || j % ret === ret - i) {
        result += s[j];
      }
    }
  }
  return result;
};

var s = "PAYPALISHIRING", numRows = 3;
// PAHNAPLSIIGYIR

console.log(convert(s, numRows));
