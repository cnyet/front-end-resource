var after2Second = function () {
  console.log();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  })
}

var add = async function(x) {
  var a = await foo(1);
  console.log(a);
  var b = await foo(2);
  console.log(b);
  return x + a + b;
}

add(3).then(v => {
  console.log(v);
});