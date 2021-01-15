// 每间隔1秒发送一次请求，5秒后结束
function loop () {
  var i = 0;
  while (i <= 5) {
    foo(i).then(function(res){
      console.log(res);
    });
    i++;
  }
}

async function foo (i) {
  return await new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(i)
    }, i*1000);
  })
  // return new Promise(function(resolve, reject){
  //   setTimeout(function(){
  //     resolve(i)
  //   }, i * 1000);
  // });
}

loop()