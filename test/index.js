function omniPoller(queryStatus, successCallback){
  for (var i = 0; i < 5; i++) {
    loop(i).then(function(res){
      var result = queryStatus(res);
      if (result) {
        successCallback();
      }
    });
  }
}

function queryStatus(param) {
  if (param != 5) {
    return false;
  }
  return true;
}

function successCallback() {
  console.log('implement successfully.');
}

function loop(time) {
  var wait = Math.pow(1.5, time);
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(time);
      console.log('第'+ time +'次等待时间' + wait);
    }, wait * 1000);
  });
}