/**
 * Object.definePorperty() 在一个对象上定义或修改一个新属性，并返回这个对象
 * @params obj - 要修改的对象
 * @params prop - 要修改对象上的属性
 * @params description - 对定义或修改属性的描述
 * [description] 分为数据描述符和存取描述符，描述符必须是二者之一，不能同时存在
 * 数据描述符和存取描述符都有：configerable enumerable
 * 数据描述符独有：value writable
 * 存取描述符独有：get() set()
 */
var obj = {
  name: 'hello',
  value: 123
};
Object.defineProperty(obj, 'name', {
  configerable: true,  // 设置该属性的描述符能否被修改，该属性能否被删除，默认 false
  enumerable: true,  // 设置该属性能否被枚举，默认 false
  // writable: true,    // 该属性能否被赋值运算符改写， 默认 false
  // value: 'world',  // 属性对应的值，可以是数值，对象、函数，默认 undefined
  get: function() {
    return false;
  }, // 给该属性提供getter方法，获取属性值，默认undefined
  set: function() { }, // 给该属性提供setter方法，修改属性值，默认undefined
});
// delete obj.name;
console.log(obj);