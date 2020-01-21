/**
 * 发布-订阅模式，也是观察者模式
 * 它定义了一对多的关系，让众多订阅者对象同时监听某一个发布者，
 * 发布者对象状态发生变化时，会通知所有订阅者，并自动更新自己
 */
class Publisher {
  constructor() {
    this._subsMap = {};
  }
  // 订阅消息
  subscribe(type, callback) {
    if (this._subsMap[type]) {
      if (!this._subsMap[type].includes(callback)) {
        this._subsMap[type].push(callback);
      }
    } else {
      this._subsMap[type] = [callback];
    }
  }
  // 消息退订
  unsubscribe(type, callback) {
    if (!this._subsMap[type] || !this._subsMap[type].includes(callback)) {
       return false;
    } else {
      const index = this._subsMap[type].indexOf(callback);
      this._subsMap[type].splice(index, 1);
    }
  }
  // 消息发布
  notify(type, ...playload) {
    if (!this._subsMap[type]) {
      return false;
    } else {
      this._subsMap[type].forEach(cb => cb(...playload));
    }
  }
}

const publisher1 = new Publisher();
publisher1.subscribe('运动鞋', function(msg) {
  console.log('123xxxx: ' + msg);
});
publisher1.subscribe('运动鞋', function(msg) {
  console.log('134xxxx: ' + msg);
});
publisher1.subscribe('休闲鞋', function(msg) {
  console.log('158xxxx: ' + msg);
});

publisher1.notify('运动鞋', '运动鞋到了');
publisher1.notify('休闲鞋', '休闲鞋已经售罄了');