class Subject {
  constructor() {
    this.state = {};
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
  notify(state) {
    this.observer.forEach(function(observer){
      observer.push(state);
    })
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(params) {

  }
}

var subject = new Subject();
var observer1 = new Observer('1');
subject.add(observer1);
subject.setState();