interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) {
    return animal.name;
}

//类型断言
function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

// let output1 = getName({name:'jack'});
// console.log('output1',output1);
console.log(isFish({ name: 'jack', swim: function swim() { } }));


function swim(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        (animal as Fish).swim();
    }
}

const tom: Cat = {
    name: 'Tom',
    run() { console.log('run') }
};
swim(tom);


function toBoolean(something: any): boolean {
    //return something as boolean;
    return Boolean(something)
}

console.log(toBoolean(1));;

function getCacheData(key: string): any {
    return (window as any).cache[key];
}

// const m = getCacheData('tom') as Cat;
// m.run();

//最优解决方案
function getCacheData2<T>(key: string): T {
    let c: Cat = {
        name: 'jack',
        run: function () { console.log('run2...') }
    }
    window.Cache[key] = c;
    return (window as any).Cache[key];
}

const tom2 = getCacheData2<Cat>('tom');
tom2.run();



function f1(sn: string | null): string {
    return sn || "default";
}

console.log("f1", f1(null));

function broken(name: string | null): string {
    function postfix(epithet: string) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    name = name || "Bob";
    return postfix("great");
}

console.log(broken(null));

// 类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName2(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        console.log('fn called');
        return n();
    }
}

console.log(getName2('t'));

function f2(): string {
    return " test";

}
console.log(getName2(f2));

//抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
abstract class Animal {
    private name:string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
    abstract makeSound(): void;
}

class Dog extends Animal {
    constructor(name: string) { super(name); }
    bark() {
        console.log('dog Woof! Woof!');
    }
    makeSound(): void{
        console.log('dog makesound');
    }
}

class Hourse extends Animal{
    constructor(name: string) { super(name); }
    // move(distanceInMeters:number =0){
    //     console.log(`Hourse moved ${distanceInMeters}m.`);
    // }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
    makeSound(): void{
        console.log('hourse makesound');
    }
}

//let a = new Animal(); // Cannot create an instance of an abstract class.
const dog = new Dog("dog");
dog.bark();
dog.move(10);
dog.bark();
let hourse:Animal = new Hourse("hourse");
hourse.move(100);
hourse.makeSound();
// console.log(hourse.name);

//构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
class Person {
    //protected name: string;
    //protected constructor(theName: string) { this.name = theName; }

    //参数属性 参数属性通过给构造函数参数前面添加一个访问限定符来声明。 
    //使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样。
    constructor(protected name: string) {
    }
}

// Employee 能够继承 Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
//let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
console.log( howard.getElevatorPitch());


class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());
greeter1.greeting ="test";
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
console.log(typeof Greeter); //function

greeterMaker.standardGreeting = "Hey there 2!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
console.log(point3d);