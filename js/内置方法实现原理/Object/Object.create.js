/**
 * Object.create() 是创建一个新对象，把制定的原型对象绑定到新对象上
 * 方法的实现与原理：
 * 1. 获取参数列表第一个元素即prototype
 * 2. 定义一个闭包，函数体为空，把它的prototype属性绑定到传入的原型值
 * 3. 返回一个该函数的实例化对象
 */
// 方法一
Object.newCreate = Object.newCreate || function () {
  var proto = Array.prototype.shift.call(arguments);  // 获取第一个元素，即prototype
  function Obj () { }
  obj.prototype = proto;
  var result = new obj();
  return result;
}
// 方法二，不推荐直接修改__proto__
/**
 * 1. 获取参数列表第一个元素即prototype
 * 2. 定义一个空对象
 * 3. 把空对象的隐式属性__proto__绑定到传入的prototype值
 * 4. 返回这个对象
 */
Object.Create = Object.Create || function () {
  var proto = Array.prototype.shift.call(arguments);  // 获取第一个元素，即prototype
  var obj = {};
  obj.__proto__ = proto;
  return obj;
}

var person = {
  name: 'Create'
};
var obj = Object.newCreate(person);
console.log(obj.constructor);