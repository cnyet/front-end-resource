/**
 * 观察者模式，存在两种角色：Observer(观察者) + Subject(被观察者)
 * 被观察者是一套需要维护的信息集合，接收状态变化，并且向观察者提供获取信息的接口
 * 一个被观察者可以关联多个观察者，观察者和被观察者是松耦合的关系
 */
class Subject {
  constructor() {
    this.state = 0;
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
    var index = this.observer.findIndex(observer);
    this.observer.splice(index, 1);
  }
  notify(params) {
    this.observer.forEach(function(observer) {
      observer.update(params);
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(params) {
    console.log(`${this.name} 获取变化的数据 ${params}`);
  }
}

var subject = new Subject();
var observer1 = new Observer('observer1');
var observer2 = new Observer('observer2');
subject.add(observer1);
subject.add(observer2);
subject.setState(1);
