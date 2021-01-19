/**
 * Object 对象的拷贝
 * 1. 浅拷贝：只拷贝了第一层的基本类型值和第一层的引用类型地址
 * 2. 深拷贝：拷贝所有层级的元素，并给每一个元素动态分配内存，拷贝后两个对象互不影响
 */

/** 一、浅拷贝 */
// 1. Object.assign(target, sources);
const obj = { a: 1 };
const copy = Object.assign({}, obj);

// 2. 扩展运算符 {...}
const obj = { a: 1, b: 2 };
const copy = { ...obj };

// 3. 解构赋值
const obj = { a: 1, b: 2 };
const {...copy} = obj;

/** =================================== */

/** 二、深拷贝 */
/**
 * 1. JSON.parse(JSON.stringify(object))
 * 缺陷：
 * (1) 此方法存在拷贝的对象丢失原型链，破坏了对象原有的属性
 * (2) 会忽略 undefined, symbol, 函数
 */
const obj = { a: 1, b: 2 };
const copy = JSON.parse(JSON.stringify(obj));


// 2. 递归逐层拷贝
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

function deepMerge (...objs) {
  const result = Object.create(null);
  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (typeof value === 'object') {
          if (result[key]) {
            result[key] = deepMerge(result[key], value);
          } else {
            result[key] = deepMerge(value);
          }
        } else {
          result[key] = value;
        }
      })
    }
  })
}

/**
 * 3. 用引用循环赋值的方式深拷贝，防止递归层级太多爆栈
 * 原理：
 * 1. 建一个空对象，用来保存循环每一层的数据，
 * 2. 用数组建一个模拟栈数据结构，默认存一条数据，用parent保存上一次循环后最终返回对象的数据，key保存上一次循环的key值，data保存上一次循环的值
 * 3. 循环遍历数组，每次取最后一条数据（栈顶数据），如果当前数据是对象，就追加当前数据到模拟的栈顶，否则直接拷贝
 * 4. 直到数组为空（栈空）返回最终的对象就是拷贝的对象
 */
function cloneLoop(x) {
  const root = {};
  // 栈
  const loopList = [{
    parent: root,
    key: undefined,
    data: x,
  }];
  while (loopList.length) {
    // 深度优先
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {};
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }
  return root;
}

/**
 * 4. jQuery.extends([deep], target, [object1], [object2]);
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
 * 5. lodash.cloneDeep(origin)
 */
var objects = { a: 1, b: 2 };
var deep = _.cloneDeep(objects);
console.log(deep.a === objects.a);  // => false

/** =================================== */