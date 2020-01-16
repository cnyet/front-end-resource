/**
 * EventBus - 事件总线
 * EventBus能够简化各组件间的通信，让我们的代码书写变得简单，
 * 能有效的分离事件发送方和接收方(也就是解耦的意思)，能避免复杂和容易出错的依赖性和生命周期问题。
 * 事件三要素:
 * 1. 事件类型
 * 2. 事件订阅者
 * 3. 事件发布者
 */
class EventBus {
  constructor() {
    // 初始化一个事件
    this.events = this.events || new Map();
  }
  // 监听事件
  addListener(type, fn) {
    if (!this.events.type) {
      this.events.set(type, fn);
    }
  }
  // 触发事件
  emit(type) {
    const handle = this.events.get(type);
    const args = Array.prototype.slice.call(arguments, 1);
    handle.apply(this, args);
  }
}

// 用法
const event = new EventBus();
event.addListener('say', function(value){
  console.log(value);
});
event.emit('say', 'hello');