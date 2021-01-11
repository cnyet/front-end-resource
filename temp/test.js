function init () {
  const foo = [].shift.call(arguments);
  const obj = Object.create(foo.prototype);
  function fn () {
    foo.call(obj, ...arguments);
    return obj;
  }
  return fn;
}

function person (name) {
  this.name = name;
}

const son = init(person)('Tom');