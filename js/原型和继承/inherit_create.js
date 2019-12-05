/**
 * Object.create() 实现继承
 */
var person = {
  name: '小明'
};

var boy = Object.create(person, {
  age: {
    configurable: true,
    enumerable: true,
    value: 12,
    writable: true
  }
});

console.log(boy.name); // 小明