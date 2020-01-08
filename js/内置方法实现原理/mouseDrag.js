/**
 * 鼠标拖拽实现原理：
 * 1. 当鼠标按下时并滑动鼠标指针时计算当前指针的相对视窗的坐标
 * 2. 鼠标指针在制定元素区域内滑动的距离就是元素移动的距离
 * 3. 借助元素的绝对定位样式，动态改变元素的left和top值
 * 4. 当鼠标按键弹起时，释放鼠标滑动监听的事件
 */

window.onload = function() {
  var box = document.getElementById('box');
  // 鼠标按下事件
  box.onmousedown = function(e) {
    // 鼠标按下时指针相对视窗的水平距离 - 元素相对视窗的水平偏移量 = 鼠标指针在元素区域内距离左边界的距离
    var diffX = e.clientX - box.offsetLeft;
    // 鼠标按下时指针相对视窗的垂直距离 - 元素相对视窗的垂直偏移量 = 鼠标指针在元素区域内距离顶部边界的距离
    var diffY = e.clientY - box.offsetTop;
    // 鼠标滑动事件
    box.onmousemove = function(event) {
      // 鼠标滑动结束时指针相对视窗的水平距离 - 之前鼠标指针在元素区域内距离左边界的距离 = 元素需要在水平方向上移动的距离
      var left = event.clientX - diffX;
      // 鼠标滑动结束时指针相对视窗的垂直距离 - 之前鼠标指针在元素区域内距离顶部边界的距离 = 元素需要在垂直方向上移动的距离
      var top = event.clientY - diffY;
      // 视窗总宽度 - 元素的水平偏移量 = 元素在水平方向上最多可以移动的距离
      var offsetX = window.innerWidth - box.offsetWidth;
      // 视窗总高度 - 元素的垂直偏移量 = 元素在垂直方向上最多可以移动的距离
      var offsetY = window.innerHeight - box.offsetHeight;
      if (left < 0) {
        left = 0; 
      } else if (left > offsetX) {
        left = offsetX;
      }
      if (top < 0) {
        top = 0;
      } else if (top > offsetY) {
        top = offsetY;    
      }
      box.style.left = left + 'px';
      box.style.top = top + 'px';
    }
  }
  // 鼠标按键弹起事件
  box.onmouseup = function() {
    this.onmousemove = null;
  }
}