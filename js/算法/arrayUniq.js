/**
 * 数组去重
 */
function arrayUniq(arr) {
  if (!Array.isArray(arr)) {
    return new TypeError('this is a array');
  }
  var obj = {};
  var newArr = [];
  arr.forEach(function (item, index) {
    if (!obj[item]) {
      obj[item] = item;
      newArr.push(item);
    }
  });
  return newArr;
}

var result = arrayUniq([1, 2, 1, 3, 1]);
console.log(result);
