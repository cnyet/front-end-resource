Array.prototype.myFilter = function(fn, context) {
  if (typeof fn !== "function") {
    throw new TypeError(`${fn} is not a function`);
  }
  let arr = this;
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(context, arr[i], i, arr);
    if (result) temp.push(arr[i]);
  }
  return temp;
};

var arr = [1, 2, 3, 4, 5];
var sum = arr.myFilter(function(item, index, array) {
  return item > 2;
});
console.log(sum);

function(callback) {
  if (this === null) {
    throw new TypeError('Array.prototype.reduce ' + 'called on null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  // 1. Let O be ? ToObject(this value).
  var o = new Object(this);

  // 2. Let len be ? ToLength(? Get(O, "length")).
  var len = o.length >>> 0;

  // Steps 3, 4, 5, 6, 7      
  var k = 0;
  var value;

  if (arguments.length >= 2) {
    value = arguments[1];
  } else {
    while (k < len && !(k in o)) {
      k++;
    }

    // 3. If len is 0 and initialValue is not present,
    //    throw a TypeError exception.
    if (k >= len) {
      throw new TypeError('Reduce of empty array ' +
        'with no initial value');
    }
    value = o[k++];
  }

  // 8. Repeat, while k < len
  while (k < len) {
    // a. Let Pk be ! ToString(k).
    // b. Let kPresent be ? HasProperty(O, Pk).
    // c. If kPresent is true, then
    //    i.  Let kValue be ? Get(O, Pk).
    //    ii. Let accumulator be ? Call(
    //          callbackfn, undefined,
    //          « accumulator, kValue, k, O »).
    if (k in o) {
      value = callback(value, o[k], k, o);
    }

    // d. Increase k by 1.      
    k++;
  }

  // 9. Return accumulator.
  return value;
}