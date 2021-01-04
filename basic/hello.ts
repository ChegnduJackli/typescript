function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

var message: string = "hello world 2";
console.log(message);

let someValue2: any = "this is a string";

let strLength2: number = (someValue2 as string).length;
console.log('strLength2',strLength2);

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
console.log('c',c); //2
let colName:string= Color[2]; //green

//当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据
let list: any[] = [1, true, "free"];

list[1] = 100;
console.log('list',list); //1,100,free

//尽量避免使用屏蔽
function f5(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

console.log('f5 false',f5(false, 0)); // returns 0
console.log('f5 true',f5(true, 0));  // returns 100


//void为没有返回类型 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
class Site {
    name(): void {
        console.log("Runoob")
    }
}
var obj = new Site();
obj.name();

console.log('test watch --watch');

str();
function str() {
    //一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。
    let name: string = "Runoob";
    let years: number = 5;
    let words: string = `您好，今年是 ${name} 发布 ${years + 1} 周年`;
    console.log(words);
}

enumstr();
//枚举类型用于定义数值集合。
function enumstr() {
    enum Color { Red, Green, Blue }; //0,1,2
    let c: Color = Color.Blue;
    console.log(c);    // 输出 2
}




enumstr2();
function enumstr2() {
    const getValue = () => {
        return 0;
    }

    enum List {
        A = getValue(),
        B = 2,  // 此处必须要初始化值，不然编译不通过
        C
    }
    console.log(List.A) // 0
    console.log(List.B) // 2
    console.log(List.C) // 3
}

variable2();
function variable2() {
    var uname: string = "Runoob";
    var score1: number = 50;
    var score2: number = 42.50
    var sum = score1 + score2
    console.log("名字: " + uname)
    console.log("第一个科目成绩: " + score1)
    console.log("第二个科目成绩: " + score2)
    console.log("总成绩: " + sum)
    //当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。
    var str1 = 1;
    //   str1="2";  // 编译错误

}


var global_num = 12          // 全局变量
class Numbers {
    num_val = 13;             // 实例变量
    static sval = 10;         // 静态变量

    storeNum(): void {
        var local_num = 14;    // 局部变量
    }
}
console.log("全局变量为: " + global_num)
console.log('静态变量:' + Numbers.sval)   // 静态变量
var obj2 = new Numbers();
console.log("实例变量: " + obj2.num_val)


function add(x: number, y: number): number {
    return x + y;
}
console.log(add(1, 2))

//在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ？。
//可选参数必须在必选参数后面
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // 正确
//let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
let result3 = buildName("Bob", "Adams");  // 正确

//设置默认参数
function buildName2 (firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}


//默认参数
function calculate_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000)
calculate_discount(1000, 0.30)

//以下实例声明了 lambda 表达式函数，函数返回两个数的和：
var foo = (x: number) => {
    x = 10 + x
    console.log(x)
}
foo(100)


interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}
var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
}

console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee  对象 ")
console.log(employee.firstName)
console.log(employee.lastName)
console.log(employee.sayHi())

unionType();
//联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
function unionType() {
    var val: string | number;
    val = 12;
    console.log("数字为 " + val);
    val = "Runoob";
    console.log("字符串为 " + val);

}

//也可以将联合类型作为函数参数使用：
//参数可以是字符串，也可以是字符串数组
function disp(name: string | string[]) {
    if (typeof name == "string") {
        console.log(name)
    } else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i])
        }
    }
}
disp("Runoob")
console.log("输出数组....")
disp(["Runoob", "Google", "Taobao", "Facebook"])


function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


interface SquareConfig {
    color?: string;
    width?: number;
}

//冒号后面是返回类型，返回了一个对象
function createSquare(config: SquareConfig): { color: string; area: number } {

    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log('mySquare', mySquare);


//函数类型，参数列表和返回值类型的函数的定义
interface SearchFunc {
    (source: string, subString: string): boolean;
}


let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
var hasfoud = mySearch("iamachinese", "chi");
console.log('hasfoud', hasfoud);

//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
let mysearch2: SearchFunc;
mysearch2 = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;

}

var hasfoud2 = mysearch2("iamachinese", "chi");
console.log('hasfoud2', hasfoud2);


//可索引的类型  可索引类型具有一个索引签名，它描述了对象索引的类型，还有相应的索引返回值类型
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];


// class Animal {
//     name: string;
// }
// class Dog extends Animal {
//     breed: string;
// }

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}


interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

var c1 = new Clock(100, 100);
c1.setTime(new Date());
console.log(c1.currentTime);

class Car {
    // 字段
    engine: string;

    // 构造函数
    constructor(engine: string) {
        this.engine = engine
    }

    // 方法
    disp(): void {
        console.log("函数中显示发动机型号  :   " + this.engine)
    }
}

// 创建一个对象
var obj21 = new Car("XXSY1")

// 访问字段
console.log("读取发动机型号 :  " + obj21.engine)

// 访问方法
obj21.disp()

class Encapsulate {
    str1: string = "hello"
    private str2: string = "world"
}

var objm = new Encapsulate()
console.log(objm.str1)     // 可访问 
//console.log(objm.str2)   // 编译错误， str2 是私有的


//类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。
interface ILoan {
    interest: number
}

class AgriLoan implements ILoan {
    interest: number
    rebate: number

    constructor(interest: number, rebate: number) {
        this.interest = interest
        this.rebate = rebate
    }
}

var objn = new AgriLoan(10, 1)
console.log("利润为 : " + objn.interest + "，抽成为 : " + objn.rebate)


class Greeter {
    greeting: string; //属性
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting; //方法
    }
}

let greeter2 = new Greeter("world 2");
console.log(greeter2.greet());

class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name); //派生类包含了一个构造函数，它必须调用 super()，它会执行基类的构造函数
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters: number = 45) { //默认参数
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);


let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employeeM = new Employee();
employeeM.fullName = "Bob Smith";
if (employeeM.fullName) {
    // alert(employeeM.fullName);
}

objfn();
function objfn() {
    var sites = {
        site1: "Runoob",
        site2: "Google",
        sayHello: function () { } // 类型模板
    };
    sites.sayHello = function () {
        console.log("hello " + sites.site1);
    };
    sites.sayHello();
}


