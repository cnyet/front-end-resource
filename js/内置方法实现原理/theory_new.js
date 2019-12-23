/**
 * new 关键字实执行过程：
 * 1. 获取构造函数和参数列表
 * 2. 创建一个空对象，将空对象的默认属性 __proto__ 指向构造函数的原型对象（prototype），使其继承原型对象上的属性和方法
 * 3. 将构造函数的this绑定到这个空对象上，并传入参数列表
 * 4. 执行构造函数，并返回空对象，如果返回的不是对象会被忽略
 */

function newInit () {
  var foo = Array.shift.call(arguments); // 第一个参数元素就是构造函数
  var newObj = Object.create(foo.prototype); // 创建一个继承构造函数原型的新对象
  foo.call(newObj, ...arguments); // 执行构造函数
  return newObj; // 返回新对象
}

