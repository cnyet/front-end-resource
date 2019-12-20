/**
 * 单例模式
 * 一个类只有一个实例，并且该类有一个全局访问的方法
 */

// ES5 实现原理
function Singleton () {
  if (Singleton._schedule) {
    return Singleton._schedule;
  }
  // 静态属性
  Singleton._schedule = this;
}
// 静态方法，获取类的实例
Singleton.getInstance = function() {
  if (Singleton._schedule) {
    return Singleton._schedule;
  }
  return Singleton._schedule = new Singleton();
}

// ES6 实现原理
class Singleton {
  static _schedule = null;
  static getInstance = function() {
    if (Singleton._schedule) {
      return Singleton._schedule;
    }
    return Singleton._schedule = new Singleton();
  }
  constructor() {
    if (Singleton._schedule) {
      return Singleton._schedule;
    }
    Singleton._schedule = this;
  }
}

const schedule1 = new Singleton();
const schedule2 = Singleton.getInstance();

console.log(schedule1 === schedule2);  // true

// 利用立即调用函数将不希望公开的单例隐藏起来：
const Singleton = (function() {
  var _instance = null;
  var Singleton = function() {
    if (_instance) return instance;
    _instance = this;
    return _instance;
  }
  Singleton.getInstance = function() {
    if (_instance) {
      return _instance;
    }
    _instance = new Singleton();
    return _instance;
  }
  return Singleton;
})();

// 利用 { } 块级作用域的方式隐藏内部变量
let getInstance;
{
  let _instance = null;
  const Sngleton = function() {
    if (_instance) return _instance;
    _instance = this;
    return _instance;
  }
  getInstance = function() {
    if (_instance) {
      return _instance;
    }
    _instance = new Singleton();
    return _instance;
  }
}