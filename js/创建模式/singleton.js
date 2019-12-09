/**
 * 单例模式
 * 一个类只有一个实例，并且该类有一个全局访问的方法
 */

// ES5 实现原理
function Singleton () {
  if (Singleton._schedule) {
    return Singleton._schedule;
  }
}