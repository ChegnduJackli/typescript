var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
//for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值。
var list = [4, 5, 6];
for (var i in list) {
    console.log(i); // "0", "1", "2",
}
for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
    var i = list_1[_a];
    console.log(i); // "4", "5", "6"
}
var pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (var pet in pets) {
    console.log(pet); // "species"
}
for (var _b = 0, pets_1 = pets; _b < pets_1.length; _b++) {
    var pet = pets_1[_b];
    console.log(pet); // "Cat", "Dog", "Hamster"
}
for (var _c = 0, _d = pets.keys(); _c < _d.length; _c++) {
    var pet = _d[_c];
    console.log("key", pet); // "Cat", "Dog", "Hamster"
}
for (var _e = 0, _f = pets.entries(); _e < _f.length; _e++) {
    var item = _f[_e];
    console.log(item);
}
var numbers = [1, 2, 3];
for (var _g = 0, numbers_1 = numbers; _g < numbers_1.length; _g++) {
    var num = numbers_1[_g];
    console.log(num); //1,2,3
}
for (var num in numbers) {
    console.log(num); //0 ,1,2
}
var m = new Map();
var o = { p: 'Hello World' };
m.set(o, 'content');
console.log(m.get(o)); // "content"
console.log(m.has(o)); // true
console.log(m.delete(o)); // true
console.log(m.has(o)); // false
var map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
//# sourceMappingURL=test.js.map