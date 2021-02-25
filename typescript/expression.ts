/**
 * 装饰器 - 是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上
 * 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入
 */
function log (params: any) {
  console.log(params);  // class HttpClient
  // 为HttpClient动态扩展属性属性和方法
  params.prototype.url = 'xxxx';
  params.prototype.run = function() {
      console.log('run...');
  };
} 

@log
class HttpClient {
  name: string;
  constructor(name: string) {
    this.name = name;
  } 
}

var http: any = new HttpClient('http');
console.log(http);


@sealed
class Greater {
  greeting: string;
  constructor (message: string) {
    this.greeting = message;
  }
  great () {
    return 'hello' + this.greating;
  }
}

function sealed (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

const greater = new Greater();
console.log(greater);