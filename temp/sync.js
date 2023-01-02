// for (var i = 0; i < 5; i++) {
//   callback(i+1);
// }
// function callback(j) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(j);
//       console.log(j);
//     }, j*1000);
//   });
// }

// for (var i = 0; i < 5; i++) {
//   (function(j){
//     setTimeout(function(){
//       console.log(j)
//     }, j*1000);
//   })(i+1);
// }

const p1 = Promise.reject('fail');

const p2 = new Promise(function(resolve, reject) {
  setTimeout(reject, 500, '完成')
})

const p3 = new Promise(function(resolve, reject) {
  setTimeout(reject, 100, '很快')
})

Promise.any([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

const ua = navigator.userAgent.toLowerCase();
function testVer (regExp) {
  return ua.match(regExp).toString().replace(/[^0-9|_.]/g, "").replace(/_/g, ".");
}

console.log(testVer(/applewebkit\/[\d._]+/g))