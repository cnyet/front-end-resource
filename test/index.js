// 观察者模式 - 被观察者
class Subject {
  constructor() {
    // 数据
    this.state = null;
    // 所有观察者的集合
    this.observer = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notify(state);
  }
  add(observer) {
    this.observer.push(observer);
  }
  remove(observer) {
    var index = this.observer.indexOf(observer);
    this.observer.splice(index, 1);
  }
  notify(params) {
    this.observer.forEach(function(observer) {
      observer.update(params);
    });
  }
}
// 观察者模式 - 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }
  update(params) {
    console.log(params);
  }
}

// 全局被观察者
var subject = new Subject();
subject.setState(123);
// 观察者
var observer1 = new Observer('observer1');
var observer2 = new Observer('observer2');
subject.add(observer1);
subject.add(observer2);