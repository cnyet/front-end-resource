/**
 * 用setTimeout模拟setInterval
 * 避免因setInterval执行时间间隔不一致
 */

function interval() {
  setTimeout(function() {
    /**
     * arguments 是类数组对象，除了有length属性和索引元素之外没有任何数组属性
     * arguments.callee 指向当前执行的函数
     * arguments.caller 指向调用当前函数的函数，已经废除
     */
    setTimeout(arguments.callee, 500);
  }, 500);
}