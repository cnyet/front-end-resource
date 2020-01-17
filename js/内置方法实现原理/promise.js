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
  constructor (callback) {
    // 三种状态
    this.status = 'pending';
    // 保存函数体执行成功后的返回值
    this.resolveVal = undefined;
    // 保存函数体执行失败后的返回值
    this.rejectVal = undefined;
    // 保存函数体执行成功后的事件队列
    this.resolveFn = [];
    // 保存函数体执行失败后的事件队列
    this.rejectFn = [];
    // 保存函数体执行成功的回调函数
    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.resolveVal = value;  
        // 依次执行成功后回调的事件队列
        this.resolveFn.forEach(fn => {
          fn();
        });
        console.log(4, 'resolve: ' + this.status)
      }
    };
    // 执行失败的回调函数
    const reject = (value) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.rejectVal = value;
        // 依次执行失败后的回调事件队列
        this.rejectFn.forEach(fn => {
          fn();
        });
        console.log(4, 'reject: ' + this.status);
      }
    };
    // 函数体
    try {
      callback(resolve, reject);
      console.log(1, 'callback: ' + this.status);
    } catch (err) {
      reject(err);
    }
  }
  // promise 执行完成之后的内置公共方法
  then (onFulfilled, onRejected) {
    console.log(2, 'then: ' + this.status);
    switch(this.status) {
      case 'pending':
        this.resolveFn.push(() => {
          onFulfilled(this.resolveVal);
        });
        this.rejectFn.push(() => {
          onRejected(this.rejectVal);
        });
        break;
      case 'fulfilled':
        onFulfilled(this.resolveVal);
        break;
      case 'rejected': 
        onRejected(this.rejectVal);
        break;
      default:
      console.log('default');
    }
  }
  // 执行失败后的内置公共方法
  catch(onRejected) {
    onRejected(this.rejectVal);
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
