function type(a) {
  return a === null ? '[object Null]' : Object.prototype.toString.apply(a); //hack ie678
}

function arraysSimilar(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length != arr2.length) {
    return false;
  }
  var arr3 = [];
  var arr4 = [];
  var x;
  for (var i in arr1) {
    arr3.push(type(arr1[i]));
    arr4.push(type(arr2[i]));
  }
  if (arr3.sort().toString() == arr4.sort().toString()) {
    return true;
  } else {
    return false;
  }
}


// function arraysSimilar(arr1, arr2) {
//   if (!(arr1 instanceof Array) || !(arr2 instanceof Array)) {
//     return false;
//   }
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   var typeArr = [];
//   var result = true;
//   arr1.forEach(function(element, index) {
//     var type = elementType(element);
//     if (!typeArr.includes(type)) {
//       typeArr.push(type);
//     }
//   });
//   for (var i = 0; i < arr2.length; i++) {
//     var type = elementType(arr2[i]);
//     if (!typeArr.includes(type)) {
//       result = false;
//       break;
//     }
//   }
//   return result;
// }

// function elementType(element) {
//   var type = null;
//   if (typeof element !== 'object') {
//     // String, Boolean, Number, undefined, function
//     return typeof element;
//   } else if (element instanceof Array) {
//     return 'array';
//   } else if (element === null) {
//     return 'null';
//   } else if (element.constructor === Date) {
//     return 'date';
//   } else if (element === window) {
//     return 'window';
//   } else {
//     return undefined;
//   }
// }


var result = function() {
  //以下为多组测试数据
  var cases = [{
    arr1: [1, true, null],
    arr2: [null, false, 100],
    expect: true
  }, {
    arr1: [function() {}, 100],
    arr2: [100, {}],
    expect: false
  }, {
    arr1: [null, 999],
    arr2: [{}, 444],
    expect: false
  }, {
    arr1: [window, 1, true, new Date(), "hahaha", (function() {}), undefined],
    arr2: [undefined, (function() {}), "okokok", new Date(), false, 2, window],
    expect: true
  }, {
    arr1: [new Date()],
    arr2: [{}],
    expect: false
  }, {
    arr1: [window],
    arr2: [{}],
    expect: false
  }, {
    arr1: [undefined, 1],
    arr2: [null, 2],
    expect: false
  }, {
    arr1: [new Object, new Object, new Object],
    arr2: [{}, {}, null],
    expect: false
  }, {
    arr1: null,
    arr2: null,
    expect: false
  }, {
    arr1: [],
    arr2: undefined,
    expect: false
  }, {
    arr1: "abc",
    arr2: "cba",
    expect: false
  }];

  //使用for循环, 通过arraysSimilar函数验证以上数据是否相似，如相似显示“通过”,否则"不通过",所以大家要完成arraysSimilar函数,具体要求，详见任务要求。    
  for (var i = 0; i < cases.length; i++) {
    if (arraysSimilar(cases[i].arr1, cases[i].arr2) !== cases[i].expect) {
      document.write("不通过！case" + (i + 1) + "不正确！arr1=" + JSON.stringify(cases[i].arr1) + ", arr2=" + JSON.stringify(cases[i].arr2) + " 的判断结果不是" + cases[i].expect);
      return false;
    }
  }
  return true;
}();
document.write("判定结果:" + (result ? "通过" : "不通过"));

