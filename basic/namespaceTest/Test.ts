/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};

validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

debugger;
// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
}

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

console.log('strLength',strLength);

//另一个为as语法：
let someValue2: any = "this is a string" ;

let strLength2: number = (someValue as string).length;
console.log('strLength2',strLength2);

//解构数组
let input = [10, 20];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

//第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。
// 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
let myAdd: (x: number, y: number) => number =
    function (x: number, y: number): number { return x + y; };

function add(x: number, y: number): number {
    return x + y;
}

let myAdd2 = function (x: number, y: number): number { return x + y; };

//推断类型
//这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。
// The parameters `x` and `y` have the type number
let myAdd3: (baseValue: number, increment: number) => number =
    function (x, y) { return x + y; };

let output1 = myAdd3(1, 29);
console.log('output1', output1);


class Person {
    protected name: string; //protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); // 错误