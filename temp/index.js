
let n = 0;
while(n < 5) {
  const res = foo();
  console.log(res);
}

async function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 1000);
  })
}