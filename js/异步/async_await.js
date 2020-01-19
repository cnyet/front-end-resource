/**
 * Async-Await也用到了promise的功能
 * async会返回一个Promise对象，一旦遇到await就会先返回，继续执行async函数后面的程序
 * 等到异步操作完成，再接着执行await后面的程序
 * await 后面可以是Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
 */
function foo(time) {
  var result = new Promise(function(resolve, reject){
    // 实际操作
    console.log(1, time);
    setTimeout(resolve, time);
  });
  return result;
}

async function wait(value) {
  for (let i=0; i<5; i++) {
    await foo(1000);
    console.log(2, i);
  }
  console.log(3, value);  // 直到foo()执行完成，才会执行这里的代码
}

var result = wait('123');
console.log(4, result);

// 1  4  2  3
