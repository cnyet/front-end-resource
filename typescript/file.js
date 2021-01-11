var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 装饰器 - 是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上
 * 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入
 */
function log(params) {
    console.log(params); // class HttpClient
    // 为HttpClient动态扩展属性属性和方法
    params.prototype.url = 'xxxx';
    params.prototype.run = function () {
        console.log('run...');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient(name) {
        this.name = name;
    }
    HttpClient = __decorate([
        log
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient('http');
console.log(http);
