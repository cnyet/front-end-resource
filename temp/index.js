var after2Second = function () {
  console.log('starting slow promise');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('slow');
      console.log('slow promise id done');
    }, 2000);
  })
}

var after1Second = function () {
  console.log('starting fast promise');
  return new Promise(resolve => {
    setTimeout(function() {
      resolve('fast');
      console.log("fast promise is done");
    }, 1000);
  });
}

var sequentialStart = async function () {
  console.log('= sequential start =');
  var slow = await after2Second();
  console.log(slow);
  var fast = await after1Second();
  console.log(fast);
}

var concurrentStart = async function() {
  console.log('= concurrent start =');
  var slow = after2Second();
  var fast = after1Second();
  console.log(await slow);
  console.log(await fast);
};

// sequentialStart();
// concurrentStart();

@foo
class MyDecorator { }

function foo (target) {
  target.flag = true;
  console.log(arguments);
}

console.log(MyDecorator.flag);


