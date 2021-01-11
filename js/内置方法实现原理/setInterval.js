/**
 * 用setTimeout模拟setInterval
 * 避免存在代码的执行间隔比预期小以及 “丢帧” 的现象
 * setInterval 的作用是经过该毫秒数将回调方法放置到队列中去，但是队列中存在正在执行的方法时，
 * 它会等待之前的方法执行完再执行，如果存在还未执行的代码实例，它就不会插入到队列中，就产生了“丢帧”
 */

function interval() {
  setTimeout(function() {
    /**
     * arguments 是类数组对象，除了有length属性和索引元素之外没有任何数组属性
     * arguments.callee 指向当前执行的函数
     * arguments.length 指向当前函数的参数数量
     * arguments.caller 指向调用当前函数的函数，已经废除
     */
    setTimeout(arguments.callee, 500);
  }, 500);
}