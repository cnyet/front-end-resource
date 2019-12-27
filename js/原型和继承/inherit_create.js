/**
 * Object.create() 实现继承
 */
var person = {
  name: '小明'
};

var boy = Object.create(person, {
  age: {
    configurable: true,  // 为true时该属性才能被修改，被删除，默认为false
    enumerable: true,  // 为true时才能被枚举，默认为false
    value: 12,  // 该属性对应的值，默认为undefined
    writable: true  // 为true时才能被赋值运算符修改，默认为false
  }
});

console.log(boy.name); // 小明