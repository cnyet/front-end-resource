var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
};
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(m) {
        this.property = "property";
        this.great = function () {
            return 'Greater';
        };
        this.hello = m;
}
    Greeter.getName = function () {
        console.log('getName');
    };
    return Greeter;
}());
var Greet = /** @class */ (function () {
    function Greet() {
        Greeter.call(this, 123);
    }
    return Greet;
}());
var Combine = /** @class */ (function (_super) {
    __extends(Combine, _super);
    function Combine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '合并';
        return _this;
    }
    return Combine;
}(Greet));
console.log(new Combine());
