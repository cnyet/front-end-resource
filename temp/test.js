function foo (i) {
  return new Promise (function(resolve, reject){
    setTimeout(function() {
      resolve(i)
      console.log(i);
    }, i * 1500);
  })
}

function loop (done) {
  for (var i = 0; i < 5; i++) {
    foo(i+1).then(function(res){
      console.log(res);
      if (res === 5) {
        done('ok');
      }
    });
  }
}

function done (value) {
  console.log(value);
}

loop(done);