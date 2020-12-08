let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}
//for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值。

let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}


let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}

for (let pet of pets.keys()) {
    console.log("key",pet); // "Cat", "Dog", "Hamster"
}

for (let item of pets.entries()) {
    console.log(item);
  }



  let numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num); //1,2,3
}
for (let num in numbers) {
    console.log(num); //0 ,1,2
}

const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
console.log(m.get(o)) // "content"

console.log(m.has(o)) // true
console.log(m.delete(o)) // true
console.log(m.has(o)) // false

const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
  ]);

