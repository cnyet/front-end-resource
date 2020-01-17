/**
 * Async-Await也用到了promise的功能
 */
function foo(time) {
  var result = new Promise(function(resolve, reject){
    // 实际操作
    setTimeout(resolve, time);
  });
  return result;
}

async function wait(value) {
  await foo(1000);
  console.log(value);
}

wait('123');
