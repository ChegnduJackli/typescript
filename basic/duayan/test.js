var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var tom = {
    name: 'Tom',
    run: function () { console.log('run'); }
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
    var c = {
        name: 'jack',
        run: function () { console.log('run2...'); }
    };
    window.Cache[key] = c;
    return window.Cache[key];
}
var tom2 = getCacheData2('tom');
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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log('dog Woof! Woof!');
    };
    Dog.prototype.makeSound = function () {
        console.log('dog makesound');
    };
    return Dog;
}(Animal));
var Hourse = /** @class */ (function (_super) {
    __extends(Hourse, _super);
    function Hourse(name) {
        return _super.call(this, name) || this;
    }
    // move(distanceInMeters:number =0){
    //     console.log(`Hourse moved ${distanceInMeters}m.`);
    // }
    Hourse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    Hourse.prototype.makeSound = function () {
        console.log('hourse makesound');
    };
    return Hourse;
}(Animal));
//let a = new Animal(); // Cannot create an instance of an abstract class.
var dog = new Dog("dog");
dog.bark();
dog.move(10);
dog.bark();
var hourse = new Hourse("hourse");
hourse.move(100);
hourse.makeSound();
// console.log(hourse.name);
//构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
var Person = /** @class */ (function () {
    //protected name: string;
    //protected constructor(theName: string) { this.name = theName; }
    //参数属性 参数属性通过给构造函数参数前面添加一个访问限定符来声明。 
    //使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样。
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
// Employee 能够继承 Person
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
//let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
console.log(howard.getElevatorPitch());
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
greeter1.greeting = "test";
console.log(greeter1.greet());
var greeterMaker = Greeter;
console.log(typeof Greeter); //function
greeterMaker.standardGreeting = "Hey there 2!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
console.log(point3d);
