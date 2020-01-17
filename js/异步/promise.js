/**
 * 内置 Promise 对象的使用方法
 * 三种状态：
 * pending: 初始状态，既不是成功，也不是失败状态。
 * fulfilled: 意味着操作成功完成。
 * rejected: 意味着操作失败。
 */

var promise1 = new Promise(function(resolve, reject) {
  // 具体的异步操作内容，异步完成且返回结果时，调用resolve和reject二者之一
  // fulfilled: resolve(value);  
  // or 
  // rejected: reject(error);
});

/**
 * promise1 是一个Promise对象
 * onFulfilled 是resolve回调函数
 * onRejected 是reject回调函数
 * then, catch, finally方法都返回一个新的 promise
 */
promise1.then(onFulfilled, onRejected);
promise1.catch(onRejected);
promise1.finally(onFinally);    // 在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数
/**
 * iterable 是一个可迭代对象，如Array
 */
Promise.all(iterable);  // iterable内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）
Promise.race(iterable);  // 一旦iterable的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
Promise.reject();  // 返回一个带有拒绝原因的Promise对象。
Promise.resolve();  // 返回一个处理成功后以给定值解析后的Promise对象

/**
 * promise 实现原理
 * @param {Function} callback 异步执行操作
 */
class Promise (callback) {
  constructor() {
    this.status = 'pending';
    this.resolveVal = undefined;
    this.rejectVal = undefined;
    this.resolveFn = [];
    this.rejectFn = [];
    var resolve = function(value) {
      if (this.status === 'pending') {
        this.status === 'fulfilled';
        this.resolveVal = value;
        this.resolveFn.forEach(fn => {
          fn();
        });
      }
    };
    var reject = function(value) {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.rejectVal = value;
        this.resolveFn.forEach(fn => {
          fn();
        });
      }
    } 
    try {
      callback(resolve, reject);
    }.catch(err) {
      reject(err);
    }
  }
  then(onFulfilled, onRejected) {
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
        onRejected(this.rejecteVal);
      break;
      default: 
    }
  }
  catch(onRejected) {
    onRejected(this.rejectVal);
  }

}