var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var box = { height: 5, width: 6, scale: 10 };
var Animal;
(function (Animal) {
    var haveMuscles = true;
    function animalsHaveMuscles() {
        return haveMuscles;
    }
    Animal.animalsHaveMuscles = animalsHaveMuscles;
})(Animal || (Animal = {}));
// namespace Animal {
//     export function doAnimalsHaveMuscles() {
//         return haveMuscles;  // Error, because haveMuscles is not accessible here
//     }
// }
function buildLabel(name) {
    return buildLabelCC.prefix + name + buildLabelCC.suffix;
}
var buildLabelCC;
(function (buildLabelCC) {
    buildLabelCC.suffix = " end ";
    buildLabelCC.prefix = "Hello, ";
})(buildLabelCC || (buildLabelCC = {}));
console.log(buildLabel("Sam Smith"));
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("f(): called");
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.method = function () { };
    __decorate([
        f(),
        g()
    ], C.prototype, "method", null);
    return C;
}());
//# sourceMappingURL=test.js.map