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
