Function.prototype.myBind = Function.prototype.myBind || function() {
  var args = Array.from(arguments);
  var fn = this;
  var context = args.shift();
  return function() {
    var params = args.concat([...arguments]);
    return fn.apply(context, params);
  };
}

var parent = {
  name: 'parent',
  getName: function(age) {
    console.log(this.name, age);
  }
}

var son = {
  name: 'son'
};

var fn = parent.getName.myBind(son, 12);
fn();