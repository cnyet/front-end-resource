/**
 * Can (a == 1 && a == 2 && a == 3) ever evaluate to true?
 * (a == 1 && a == 2 && a == 3) 可能为 true 吗？
 */
var a = {
  value: 1,
  valueOf: function() {
    return a.value++
  }
  // toString: function() {
  //   return a.value++;
  // }
}
console.log(a == 1 && a == 2 && a == 3);