/**
 * 数组拷贝方法汇总
 * 1. 数组浅拷贝：只拷贝一层，深层次的引用类型只拷贝引用，原数组和拷贝的数组副本，
 *    如果改变一个数组的引用类型元素，另一个数组也放生变化
 * 2. 数组深拷贝：拷贝多层，每一层级的数据都会被拷贝出来。原数组和拷贝的数组副本，
 *    如果改变一个数组的引用类型元素，另一个数组不受影响
 */
/** 一、浅拷贝 */
// 1. Array.slice(begin, end);
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // ["camel", "duck", "elephant"]

/**
 * 2. Array.from() + new Set();
 * Array.from(arrayLike): 从一个类数组或可迭代对象创建一个数组
 * new Set(): 生成一个没有重复值的类似于数组
 */
// Array.from() 用法
const elements = document.getElementsByTagName('li');  // 返回HTMLCollection类型的类数组集合
Array.from(elements);  // 返回一个数组
// new Set() 用法
var set = new Set([1,2,2,3,4]);  // {1, 2, 3, 4} 
// Array.from() + new Set()用法
const numbers = [1, 2, 3, 4, 5];
const copy = Array.from(new Set(numbers));

// 3. Array.map(item => item);
const numbers = [1, 2, 3, 4, 5];
const copy = numbers.map( num => num );

// 4. [...] 扩展运算符
const numbers = [1, 2, 3, 4, 5];
const copy = [...numbers];

// 5. Array.of() 和扩展运算符
const numbers = [1, 2, 3, 4, 5];
const copy = Array.of(...numbers);

// 6. new Array() 和扩展运算符
const numbers = [1, 2, 3, 4, 5];
const copy = new Array(...numbers);

// 7. 解构赋值
const numbers = [1, 2, 3, 4, 5];
const [...copy] = numbers;

// 8. Array.concat() 数组合并
const numbers = [1, 2, 3, 4, 5];
const copy = numbers.concat();

// 9. Array.push() 和 扩展运算符
const numbers = [1, 2, 3, 4, 5];
let copy = [];
copy.push(...numbers);

// 10. forEach() 和 扩展运算符
const numbers = [1, 2, 3, 4, 5];
let copy = [];
numbers.forEach((value) => copy.push(value));

// 11. apply()
const numbers = [1, 2, 3, 4, 5];
let copy = [];
Array.prototype.push.apply(copy, numbers);

/** ============================================ */

/** 二、深拷贝 */

/**
 * 1. JSON.parse(JSON.stringify(object))
 * 缺陷：
 * (1) 此方法存在拷贝的对象丢失原型链，破坏了对象原有的属性
 * (2) 会忽略 undefined, symbol, 函数
 */

var arr = ['json', 
  {
    name: 'array'
  }, 
  [1, 2, 3]
];
var copy = JSON.parse(JSON.stringify(arr));

// 缺陷一
function Person (name) {
  this.name = name;
}
var boy = new Person('jim');
var arr = [123, 'hello', boy];
var copy = JSON.parse(JSON.stringify(arr));
console.log(arr[2].constructor);  // Person
console.log(copy[2].constructor); // Object

// 2. 递归拷贝
function deepCopy(obj){
  if(obj === null) return null;
  if(obj instanceof RegExp) return new RegExp(obj);
  if(obj instanceof Date) return new Date(obj);
  if(typeof obj !== 'object') return obj;

  let result = (obj instanceof Array) ? [] : {};
  for(let key in obj){
    result[key] = deepCopy(obj[key]); 
  }
  return result;
}

/**
 * 3. jQuery.extends([deep], target, [object1], [object2]);
 *    用于将一个或多个对象的内容合并到目标对象
 */
var object1 = {
  apple: 0,
  banana: {
    weight: 52, 
    price: 100
  },
  cherry: 97
};
var object2 = {
  banana: {
    price: 200
  },
  durian: 100
};
/* object2 合并到 object1 中 */
$.extend(true, object1, object2);

/**
 * 4. lodash.cloneDeep(origin)
 */
var objects = [{ 'a': 1 }, { 'b': 2 }];
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);  // => false

/** ============================================ */