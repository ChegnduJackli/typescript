function getName(animal) {
    return animal.name;
}
//类型断言
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
// let output1 = getName({name:'jack'});
// console.log('output1',output1);
console.log(isFish({ name: 'jack', swim: function swim() { } }));
function swim(animal) {
    if (typeof animal.swim === 'function') {
        animal.swim();
    }
}
const tom = {
    name: 'Tom',
    run() { console.log('run'); }
};
swim(tom);
function toBoolean(something) {
    //return something as boolean;
    return Boolean(something);
}
console.log(toBoolean(1));
;
function getCacheData(key) {
    return window.cache[key];
}
// const m = getCacheData('tom') as Cat;
// m.run();
//最优解决方案
function getCacheData2(key) {
    let c = {
        name: 'jack',
        run: function () { console.log('run2...'); }
    };
    window.Cache[key] = c;
    return window.Cache[key];
}
const tom2 = getCacheData2('tom');
tom2.run();
function f1(sn) {
    return sn || "default";
}
console.log("f1", f1(null));
function broken(name) {
    function postfix(epithet) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    name = name || "Bob";
    return postfix("great");
}
console.log(broken(null));
function getName2(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        console.log('fn called');
        return n();
    }
}
console.log(getName2('t'));
function f2() {
    return " test";
}
console.log(getName2(f2));
//抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
class Animal {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    constructor(name) { super(name); }
    bark() {
        console.log('dog Woof! Woof!');
    }
    makeSound() {
        console.log('dog makesound');
    }
}
class Hourse extends Animal {
    constructor(name) { super(name); }
    // move(distanceInMeters:number =0){
    //     console.log(`Hourse moved ${distanceInMeters}m.`);
    // }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
    makeSound() {
        console.log('hourse makesound');
    }
}
//let a = new Animal(); // Cannot create an instance of an abstract class.
const dog = new Dog("dog");
dog.bark();
dog.move(10);
dog.bark();
let hourse = new Hourse("hourse");
hourse.move(100);
hourse.makeSound();
// console.log(hourse.name);
//构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
class Person {
    //protected name: string;
    //protected constructor(theName: string) { this.name = theName; }
    //参数属性 参数属性通过给构造函数参数前面添加一个访问限定符来声明。 
    //使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样。
    constructor(name) {
        this.name = name;
    }
}
// Employee 能够继承 Person
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
//let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
console.log(howard.getElevatorPitch());
class Greeter {
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}
Greeter.standardGreeting = "Hello, there";
let greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
greeter1.greeting = "test";
console.log(greeter1.greet());
let greeterMaker = Greeter;
console.log(typeof Greeter); //function
greeterMaker.standardGreeting = "Hey there 2!";
let greeter2 = new greeterMaker();
console.log(greeter2.greet());
class Point {
}
let point3d = { x: 1, y: 2, z: 3 };
console.log(point3d);
