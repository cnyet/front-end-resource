// (x) 捕获并记住匹配的字符串
var exp1 = 'foo hello'.replace(/(foo)/, '111');
console.log(exp1);  // 111 hello

var exp2 = 'foo hello'.replace(/(foo)/, '$1 000');  // $1代指匹配的原字符串 foo
console.log(exp2);  // foo 000 hello

var exp3 = /(foo) \1/.test('foo hello');  // \1 代指第一个捕获的括号内的字符串 foo
var exp4 = /(foo) \1/.test('foo foo');
console.log(exp3, exp4);  // false true

// (?:x) 捕获但不记住匹配的字符串
var exp5 = 'foo hello'.replace(/(?:foo)/, '$1 000');
console.log(exp5);  // $1 000 hello

// x(?=y) 只匹配 x ，且 x 后面是 y 的字符串
var exp6 = 'foo hello'.replace(/foo (?=hello)/, '000');
console.log(exp6);  // 000hello

// (?<=y)x 只匹配 x, 且 x 前面是 y 的字符串
var exp7 = 'foo hello'.replace(/(?<=foo) hello/, '000');
console.log(exp7);

// x(?!y) 只匹配 x，且 x 后面不跟 y 的字符串
var exp8 = /foo (?!hello)/.test('foo hello');
console.log(exp8); // false

// (?<!y)x 只匹配 x ，且 x 前面不是 y 的字符串
var exp9 = /(?<!foo) hello/.test('foo hello');
console.log(exp9); // false
