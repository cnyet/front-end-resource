class Router {
  constructor () {
    this.routes = {};
    this.currentHash = '';
    this.addEventListener('load', this.refresh);
    this.addEventListener('hashchange', this.refresh);
  }
  setRouter (path, callback) {
    this.routes[path] = callback || function() {
      console.log(path);
    };
  }
  refresh () {
    this.currentHash = location.hash.slice(1) || '/';
    this.routes[this.currentHash];
  }
}