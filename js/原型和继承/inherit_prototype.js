/**
 * 改变 prototype 指向继承
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.size = function() {
    console.log('size:' + (this.width * this.height));
  }
}

function Square(color) {
  this.color = color;
}

Square.prototype = new Rectangle(2, 3);  // Square的构造函数被改变
Square.prototype.constructor = Square;  // 重新Square的构造函数指向自己
var square = new Square('red');

console.log(square.__proto__ === Square.prototype);