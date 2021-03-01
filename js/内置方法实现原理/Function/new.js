/**
 * new 关键字其实是一个执行构造函数的方法：
 * 1. 获取构造函数和参数列表
 * 2. 创建一个空对象，将空对象的原型 __proto__ 指向构造函数的 prototype 属性，使其继承原型对象上的属性和方法
 * 3. 将构造函数的this绑定到这个空对象上，并传入参数列表
 * 4. 执行构造函数，并返回空对象，如果返回的不是对象会被忽略
 */
function newInit () {
  // 将参数集合转化为数组
  var args = [].slice.call(arguments);
  // var args = Array.prototype.slice.call(arguments);
  // 第一个参数元素是构造函数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 结果是对象就直接返回，否则返回 this 对象 context
  return (typeof result === 'object' && result !== null) ? result : context;
}

function Person (name, age) {
  this.name = name;
  this.age = age;
}

var obj = newInit(Person, '张三', 20);
console.log(obj);