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