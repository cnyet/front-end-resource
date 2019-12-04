/**
 * call，apply，bind 显式绑定this指向
 * call，apply，bind 的第一个参数就是 this 指向的对象，
 * 如果传入的第一个参数是null, undefined 那么它会被忽略，就会变成使用默认绑定
 */
function Foo(name, price) {
  this.name = name;
  this.price = price;
}

function Food(category, name, price) {
  Foo.call(this, name, price);
  // Foo.apply(this, [name, price]);
  this.category = category;
}

var apple = new Food('食品', '苹果', '5元');
console.log(apple);

// bind 方法绑定this，返回新的函数，调用新函数时，将给定的参数列表作为原参数列表前若干项
function Fruit(category, name, price) {
  this.category = category;
  var info = Foo.bind(this, name, price)();
  console.log(info);
}

console.log(new Fruit('水果', '苹果', '5元'));
