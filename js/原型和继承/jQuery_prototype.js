/**
 * jQuery 的实现原理
 * 1. 定义一个变量jQuery，作为构造函数，并返回jQuery.fn.init一个实例对象
 * 2. 由于构造函数jQuery也是对象，并在jQuery.fn对象上设置两个属性
 * 3. 然后在jQuery.fn上再设置一个函数init()，它主要作用就是获取所有选择器的dom元素，并将选择器的dom元素、选择器名称都存入jQuery.fn
 * 4. 将两个构造函数jQuery和jQuery.fn.init的原型都设置为jQuery.fn
 * 5. 最后把$暴露在全局环境中
 */
(function(window){
  var jQuery = function(selector) {
    return new jQuery.fn.init(selector);
  };
  jQuery.fn = {
    css: function(key, value) {
      console.log('css');
    },
    html: function(value) {
      console.log('html');
    }
  };
  jQuery.fn.init = function(selector) {
    var collection = document.querySelectorAll(selector);
    var dom = Array.prototype.slice.call(collection);
    for (var i = 0; i < dom.length; i++) {
      this[i] = dom[i];
    }
    this.selector = selector || '';
    this.length = dom.length;
  };

  jQuery.prototype = jQuery.fn.init.prototype = jQuery.fn;
  window.$ = jQuery;
})(window);