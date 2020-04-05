/**
 * 双向绑定实现原理:
 * 1. 借助Object的内置方法 defineProperty() 
 * 2. Object.defineProperty(obj, prop, description) 会直接在一个对象上定义一个新属性，或者修改现有的属性，并返回这个对象
 * 3. 属性描述符有两种主要形式：数据描述符和存取描述符。
 * 4. 数据描述符是一个具有值的属性，该值可能是可写的，也可能不是可写的，有value, writable
 * 5. 存取描述符是由getter-setter函数对描述的属性。描述符必须是这两种, 有set, get
 *    形式之一；不能同时是两者。
 */
let obj = {};
let inputVal = null;
const input = document.getElementById('input');
const span = document.getElementById('text');
let value;
// 只有数据描述符
Object.defineProperty(obj, 'name', {
  value: 123,
  configurable: true,  // 为true时该属性才能被修改，或被删除，默认为false
  enumerable: true,  // 为true时才能被枚举，默认为false
  writable: false
});

// 只有存取描述符
Object.defineProperty(obj, 'value', {
  confugrable: true,
  enumerable: true,
  get: function() {
    console.log('获取数据');
    return inputVal;
  },
  set: function (newVal) {
    console.log('修改数据', obj);
    inputVal = span.innerText = newVal;
  }
});

input.addEventListener('keyup', function(e) {
   obj.value = e.target.value;
});
console.log(obj.value);
