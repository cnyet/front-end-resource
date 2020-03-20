/**
 * 观察者模式，存在两种角色：Observer(观察者) + Subject(被观察者)
 * 被观察者是一套需要维护的信息集合，接收状态变化，并且向观察者提供获取信息的接口
 * 一个被观察者可以关联多个观察者，观察者和被观察者是松耦合的关系
 */
class Subject() {
  constructor() {
    this.state = 0;
    this.observer = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
  add(observer) {
    this.observer.push(observer);
  }
  remove(observer) {
    var index = this.observer.findIndex(observer);
    this.observer.splice(index, 1);
  }
  notify() {
    this.observer.forEach(function(observer) {
      observer.update();
    });
  }
}

class Observer() {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    subject.add(this);
  }
  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`);
  }
}