var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
function modify(model) {
    var newModel = model;
    return function (target, key, descriptor) {
        descriptor.value = function () { return newModel; };
    };
}
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.speed = function () {
        return 8;
    };
    Bike.prototype.model = function () { return 'normal'; };
    __decorate([
        readonly
    ], Bike.prototype, "speed", null);
    __decorate([
        modify('electric')
    ], Bike.prototype, "model", null);
    return Bike;
}());
var bike = new Bike;
bike.speed = function () { return 5; };
console.log(bike.speed());
console.log(bike.model());
