/**
 * 类型检测方法之 typeof
 * 返回一个字符串, 有number, string, boolean, object, undefined, function
 */
typeof 123;  // number
typeof 'hello'; // string
typeof true; // boolean
typeof undefined; // undefined
typeof [1, 2]; // object
typeof new Object(); // object
typeof NaN; // number
typeof null; // object
// typeof fn; // function 
// function fn() { ... } 


/**
 * 类型检测方法之 instanceof 
 * 要求左侧是一个对象，否则报错，要求右侧是对象或者构造函数，否则报错
 */
[1, 2] instanceof Array
new Object() instanceof Object

/**
 * 类型检测方法之 Object.prototype.toString
 * 但是 IE6/7/8 Object.prototype.toString.call(null)返回 [object Object]
 */
Object.prototype.toString.call([1, 2]);  // [object Array]
Object.prototype.toString.call(function(){ });  // [object Function]
Object.prototype.toString.call(null);  // [object Null]
Object.prototype.toString.call(undefined);  // [object Undefined]

/**
 * 类型检测方法之 constructor
 */

function Person() {

}

var son = new Person ();
son.constructor === Person;