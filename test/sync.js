for (var i = 0; i < 5; i++) {
  callback(i+1);
}
function callback(j) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(j);
      console.log(j);
    }, j*1000);
  });
}

// for (var i = 0; i < 5; i++) {
//   (function(j){
//     setTimeout(function(){
//       console.log(j)
//     }, j*1000);
//   })(i+1);
// }
 