/**
 * class 是对象的模版，用它来封装对象原型，构造函数，静态属性等，
 * 它只是定义对象的语法糖写法，使其看起来更像面向对象编程
 * class 语法都可以转化成 ES5 的语法
 */

/** 通过 ES5 语法实例化对象的过程 **/
function Foo (name) {
  // 实例化对象的私有属性
  this.name = name;
}
// 静态方法
Foo.staticMethod = function () {
  console.log('静态方法');
}
// 静态属性，还未成为标准
// Foo.param = 'Hello World';
// 原型上的公共方法
Foo.prototype.doThis = function () {
  console.log('原型上的方法');
}
// 原型上的公共属性
Foo.prototype.name = 'prototype';
var obj1 = new Foo('ES5');
console.log(Foo.prototype);

/* 等价于 ES6 实例化对象的过程  */
class Bar {
  // 构造函数
  constructor(name) {
    // 实例化对象的私有属性
    this.name = name;
  }
  // 静态属性，还未成为标准
  // static param = 'Hello World';
  // 私有属性和方法只能在类的内部访问的方法和属性，外部不能访问，但是还未成为标准
  // #count = 0;
  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }
  // 静态方法
  static staticMethod () {
    console.log('静态方法');
  }
  // 原型上的公共方法
  doThis () {
    console.log('原型上的方法');
  }
}

var obj2 = new Bar('bar');
console.log(obj2.constructor);