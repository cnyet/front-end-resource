/**
 * hash 路由实现原理：
 * 1. 监听页面加载事件和hash改变事件
 * 2. 当事件被触发更新当前页面hash，执行保存的回调函数
 */
class Route {
  constructor() {
    // 存储路由对象
    this.routes = {};
    // 当前hash
    this.currentHash = '';
    // 监听事件
    this.addEventListener('load', this.refresh);
    this.addEventListener('hashchange', this.refresh);
  }
  setRoute(path, callback) {
    this.routes[path] = callback || function() {
      console.log('路由', path);
    }
  }
  refresh() {
    this.currentHash = location.hash.slice(1) || '/';
    this.routes[this.currentHash]();
  }
}

var route = new Route();
route.setRoute('/home', function(){
  console.log('设置home路由');
});