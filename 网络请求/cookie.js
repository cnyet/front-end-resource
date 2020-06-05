/**
 * 设置 cookie
 */
function setCookie (name, value, expires) {
  var day = 30;
  var current = new Date();
  current.setTime(current.getTime() + (expires * 60 * 60 * 1000));
  document.cookie = name + '=' + escape(value) + ((expires == null) ? '' : ';expires=' + current.toGMTString());
}

/**
 * 获取cookie
 */
function getCookie (name) {
  var start, end;
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(name + '=');
    if (start !== -1) {
      start = start + name.length + 1;
      end = document.cookie.indexOf(';', start);
      if (end === -1) {
        end = document.cookie.length;
      } 
      return unescape(document.cookie.substring(start, end));
    } 
  }
  return null;
}

/**
 * 删除cookie
 */
function deleteCookie (name) {
  var expires = new Date();
  var value = this.getCookie(name);
  expires.setTime(expires.getTime() - 1);
  if (value !== null) {
    document.cookie = name + '=' + value + ';expires=' + expires.toGMTString();
  }
}

/**
 * 日期格式化
 */
function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    ftm = ftm.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  var obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (var i in obj) {
    if (new RegExp((`${i}`).test(fmt))) {
      var str = obj[i] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : (('00' + obj[i]).substr(('' + obj[i]).length)));
    }
  }
  return fmt;
}