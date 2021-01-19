var str = "aaa@qq.com";
console.log(str.match(/^\w+@[a-zA-Z0-9]{2,10}(.com|cn)$/));
console.log(/^\w+@[a-zA-Z0-9]{2,10}(.com|.cn)$/.test(str));