// Publish Center Subscribe
class Event {
  constructor() {
    this.state = {};
  }
  subscribe (type, callback) {
    if (!(type in this.state)) {
      this.state[type] = [];
    }
    this.state[type].push(callback);
  }
  unSubscribe (type, callback) {
    var index = this.state[type].indexOf(callback);
    this.state[type].splice(index, 1);
  }
  notify (type, params) {
    this.state[type].forEach(function(callback){
      callback(params);
    })
  }
}