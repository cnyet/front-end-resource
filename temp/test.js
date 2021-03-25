// 发布订阅模式
class Observer {
  constructor () {
    this.state = {}
  }
  subscribe (type, foo) {
    if (!type in this.state) {
      this.state[type] = []
    }
    this.state[type].push(foo)
  }
  unsubscribe (type, foo) {
    var index = this.state[type].indexOf(type)
    this.state[type].splice(index, 1)
  }
  dispatch (type, value) {
    this.state[type].forEach(function(foo){
      foo(value)
    })
  }
}

var observer = new Observer()
observer.subscribe('a', function() {

})
observer.dispatch('a')