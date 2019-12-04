/**
 * new绑定：构造函数内部的this指向通过 new 调用创建实例
 */
function Foo () {
  console.log(this);
}

var bar = new Foo();    // this 就是 bar