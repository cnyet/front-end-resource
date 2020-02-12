## JS 类型检测的5种方法
1. typeof 检测 string, number, boolean, function, undefined, object
2. instanceof 检测实例对象的构造函数，也是检测一个对象是否在某个对象的原型链上
3. Object.prototype.toString() 方法借助每个对象原型都指向Object的特性，然后调用call方法返回具体的类型信息
4. constructor 检测对象的构造函数