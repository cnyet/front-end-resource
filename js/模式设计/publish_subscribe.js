/**
 * 发布-订阅模式包括三部分：发布者、订阅者、分发中心
 * 发布者发送消息到分发中心，分发中心再通知所有的订阅者，发布者和订阅者之间完全解耦
 * 分发中心挂在全局环境下，提供注册和订阅的功能
 */
class Event {
  constructor() {
    this.handler = {};
  }
  getHandler() {
    return this.handler;
  }
  // 订阅
  subscribe(type, handler) {
    if (!(type in this.handler)) {
      this.handler[type] = [];
    }
    this.handler[type].push(handler);
  }
  // 退订
  unsubscribe(type, handler) {
    if (type in this.handler && this.handler[type].includes(handler)) {
      var index = this.handler[type].findIndex(handler);
      this.handler[type].splice(index, 1);
    }
  }
  // 消息分发
  dispatch(type, params) {
    if (type in this.handler) {
      this.handler[type].forEach(function(item){
        item(params);
      });
    }
  }
}

var event = new Event();
event.subscribe('book', function(){
  console.log('订阅一本书');
});
event.subscribe('book', function(){
  console.log('订阅了book');
});
event.subscribe('clothes', function(){
  console.log('订阅了衣服');
});

event.dispatch('book');