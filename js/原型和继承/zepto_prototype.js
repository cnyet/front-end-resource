/**
 * zepto 原型的实现原理
 * 1. 定义一个空对象，定义一个Z函数作为构造函数使用，再定义一个要暴露给全局变量$，
 * 2. 在空对象中定义两个属性init, Z，且都是函数，zepto.init()主要作用是获取所有选择器，并返回调用zepto.Z()的结果
 * 3. zepto.Z()返回一个Z()的实例，将所有选择器的dom，选择器名称都存入该实例对象
 * 4. 也就是变量$最后是一个Z的实例对象，且在$上定义一个属性fn，用来存放扩展的属性和方法
 * 5. 最后把构造函数Z的原型指向$.fn，把$暴露在全局环境中
 */
(function(window) {
  var zepto = {};
  var $ = function(selector) {
    return zepto.init(selector);
  };
  function Z (dom, selector) {
    var i, len = dom ? dom.length : 0;
    for (i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || '';
  }

  zepto.init = function(selector) {
    var collection = document.querySelectorAll(selector);
    var dom = Array.prototype.slice.call(collection);
    return zepto.Z(dom, selector);
  };
  zepto.Z = function(dom, selector) {
    return new Z(dom, selector);
  }

  $.fn = {
    css: function(key, value) {
      console.log('css');
    },
    html: function(value) {
      console.log('html');
    }
  };

  Z.prototype = $.fn;
  window.$ = $;
})(window);