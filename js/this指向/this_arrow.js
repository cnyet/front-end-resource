/**
 * 箭头函数中的this指向声明它的上下文，不能通过call, apply, bind 来修改this，
 * 由于箭头函数没有 constructor属性，不能作为构造函数用new调用
 * 箭头函数不创建新函数作用域，直接沿用语句外部的作用域。
 */
var a = 1;
var obj = {
  a: 2,
  foo: () => {
    console.log(this.a);
  }
}

obj.foo();  // this指向window，1