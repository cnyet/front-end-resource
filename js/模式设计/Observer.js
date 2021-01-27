/**
 * 观察者模式，由两部分组成：Observer(观察者) + Subject(主体)
 * 被观察者是主体，它只需维护一套观察者依赖的数据和接口集合，只有自己才能改变自己的数据，
 * 所有观察者都要有一个统一的借接口来获取数据
 * 一个被观察者可以关联多个观察者，观察者和被观察者是松耦合的关系
 * 应用场景：气象站 - 查看天气的用户
 * 主要用于单个应用内部 document.addEventListener()
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
    var index = this.observer.indexOf(observer);
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
