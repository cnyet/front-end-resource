/**
 * class 的静态属性和方法的ES5实现原理
 * 通过Object.defineProperty将属性绑定到对象上
 */
function _defineProperty(obj, key, value) { 
  if (key in obj) { 
    Object.defineProperty(obj, key, { 
      value: value, 
      enumerable: true, 
      configurable: true, 
      writable: true 
    }); 
  } else { 
    obj[key] = value; 
  } 
  return obj; 
}

var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};

_defineProperty(Person, "origin", 'hello');