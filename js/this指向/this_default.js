/**
 * 默认绑定：非严格模式下，this 指向全局对象，浏览器上是window，
 * node 环境是global，严格模式下：this指向undefined
 */
var a = 1;
var obj = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
}
var bar = obj.foo;
bar();  // this指向window，1