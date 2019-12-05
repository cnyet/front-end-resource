/**
 * 通过调用 call, apply, bind 继承
 */
function Person (name) {
  this.name = name;
  function getName() {
    console.log(this.name);
  }
}
function Boy (name, age) {
  this.age = age;
  Person.call(this, name);
  // Person.apply(this, [name]);
}

var boy = new Boy('tom', 12);
console.log(boy);  // { age: 12, name: 'tom', getName: [Function] }

var obj = {
  name: '小明',
  age: 20,
  getName: function() {
    console.log(this.name, this.age);
  }
}
obj.getName.bind(boy)();  // tom 12