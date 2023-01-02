/**
 * promise 内置对象的实现原理：
 * 1. 定义变量保存当前执行状态、执行成功后返回值、执行失败的返回值、执行成功的事件队列、执行失败的事件队列
 * 2. 定义每个对象私有的内置方法resolve、reject，所有对象公共的方法then、catch
 * 3. 由于promise对象的构造函数接受一个参数是回调函数，且回调函数又有两个参数也是回调函数，
 *    这两个回调函数第一个是执行成功的回调，第二个参数是执行失败的回调
 * 4. 因为实例化promise对象的执行的函数体是一个异步函数，所以在异步完成之前，状态一直都默认状态，
 *    因此在默认状态时将每个then的执行成功事件加入队列中，当异步完成以后，再依次执行事件队列里面的方法
 */
class Promise {
  // 构造函数
  constructor (executor) {
    this.status = 'pending'; // promise 状态
    this.value = null; // promise 执行成功返回的结果
    this.reason = null; // promise 执行失败返回的结果
    this.onFulfilledArray = []; // 保存 then 链式调用的数组
    this.onRejectedArray = []; // 保存 catch 链式调用的数字
    // 异步执行成功以后的回调函数 
    var resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledArray.forEach(callback => {
          callback(value);
        });
      }
    };
    // 异步执行失败以后的回调函数
    var reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedArray.forEach(callback => {
          callback(reason);
        })
      }
    };
    // 异步执行操作
    try {
      executor(resolve, reject);
      console.log(1);
    } catch (error) {
      reject(error);
    }
  }
  // 原型上的执行成功方法
  then (onFulfilled, onRejected) {
    console.log(2);
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : data => data;
    onRejected = typeof onRejected === 'onRejected' ? onRejected : error => { throw error };
    switch (this.status) {
      case 'pending':
        this.onFulfilledArray.push(onFulfilled);
        this.onRejectedArray.push(onRejected);
        break;
      case 'fulfilled':
        onFulfilled(this.value);
        break;
      case 'rejected':
        onRejected(this.reason);
        break;
      default: console.log('default');
    }
  }
  // 原型上的执行失败方法
  catch (onRejected) {
    onRejected(this.reason);
  }
}

var promise = new Promise(function (resolve, reject) {
  setTimeout(function() {
    resolve('ok');
  }, 1000);
  // resolve('ok');
});
promise.then(function(value) {
  console.log(3, 'then callback: ' + value);
});

const p1 = Promise.reject('fail');

const p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, '完成')
})

const p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, '很快')
})

// all() 返回所有 fulfilled 的数组，或者第一个 rejected 的值
Promise.all([p1, p2, p3]).then(res => {
  console.log(res)
})

// any() 返回第一个fulfilled的值，如果可迭代对象内所有的 promises 都被拒绝了，会返回AggregateError，并进入catch
Promise.any([p1, p2, p3]).then(res => {
  console.log(res)
})

// race() 返回第一个 fulfilled 或者 rejected 的值
Promise.race([p1, p2, p3]).then(res => {
  console.log(res)
})


