function identity(arg) {
    //console.log(arg.length); //Error: T doesn't have .length
    return arg;
}
var output = identity("mystring");
console.log(output);
var output1 = identity("mystring1");
console.log(output1);
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
var output2 = loggingIdentity([1, 2, 3]);
console.log(output2);
var output3 = loggingIdentity(['1', '2', '3', '4']);
console.log(output3);
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
var output4 = loggingIdentity2(new Array('g', 'h'));
console.log(output4);
//泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var output6 = myGenericNumber.add(28, 3);
console.log(output6);
function loggingIdentity3(arg) {
    console.log("arg", arg);
    console.log("length", arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity3({ length: 10, value: 3 });
//# sourceMappingURL=test.js.map