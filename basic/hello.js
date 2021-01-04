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
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
var message = "hello world 2";
console.log(message);
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
console.log('strLength2', strLength2);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log('c', c); //2
var colName = Color[2]; //green
//当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据
var list = [1, true, "free"];
list[1] = 100;
console.log('list', list); //1,100,free
//尽量避免使用屏蔽
function f5(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log('f5 false', f5(false, 0)); // returns 0
console.log('f5 true', f5(true, 0)); // returns 100
//void为没有返回类型 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Runoob");
    };
    return Site;
}());
var obj = new Site();
obj.name();
console.log('test watch --watch');
str();
function str() {
    //一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。
    var name = "Runoob";
    var years = 5;
    var words = "\u60A8\u597D\uFF0C\u4ECA\u5E74\u662F " + name + " \u53D1\u5E03 " + (years + 1) + " \u5468\u5E74";
    console.log(words);
}
enumstr();
//枚举类型用于定义数值集合。
function enumstr() {
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ; //0,1,2
    var c = Color.Blue;
    console.log(c); // 输出 2
}
enumstr2();
function enumstr2() {
    var getValue = function () {
        return 0;
    };
    var List;
    (function (List) {
        List[List["A"] = getValue()] = "A";
        List[List["B"] = 2] = "B";
        List[List["C"] = 3] = "C";
    })(List || (List = {}));
    console.log(List.A); // 0
    console.log(List.B); // 2
    console.log(List.C); // 3
}
variable2();
function variable2() {
    var uname = "Runoob";
    var score1 = 50;
    var score2 = 42.50;
    var sum = score1 + score2;
    console.log("名字: " + uname);
    console.log("第一个科目成绩: " + score1);
    console.log("第二个科目成绩: " + score2);
    console.log("总成绩: " + sum);
    //当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。
    var str1 = 1;
    //   str1="2";  // 编译错误
}
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log('静态变量:' + Numbers.sval); // 静态变量
var obj2 = new Numbers();
console.log("实例变量: " + obj2.num_val);
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
//在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ？。
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // 正确
//let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
var result3 = buildName("Bob", "Adams"); // 正确
//默认参数
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
//以下实例声明了 lambda 表达式函数，函数返回两个数的和：
var foo = function (x) {
    x = 10 + x;
    console.log(x);
};
foo(100);
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
unionType();
//联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
function unionType() {
    var val;
    val = 12;
    console.log("数字为 " + val);
    val = "Runoob";
    console.log("字符串为 " + val);
}
//也可以将联合类型作为函数参数使用：
//参数可以是字符串，也可以是字符串数组
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp("Runoob");
console.log("输出数组....");
disp(["Runoob", "Google", "Taobao", "Facebook"]);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log('mySquare', mySquare);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var hasfoud = mySearch("iamachinese", "chi");
console.log('hasfoud', hasfoud);
//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
var mysearch2;
mysearch2 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var hasfoud2 = mysearch2("iamachinese", "chi");
console.log('hasfoud2', hasfoud2);
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var c1 = new Clock(100, 100);
c1.setTime(new Date());
console.log(c1.currentTime);
var Car = /** @class */ (function () {
    // 构造函数
    function Car(engine) {
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log("函数中显示发动机型号  :   " + this.engine);
    };
    return Car;
}());
// 创建一个对象
var obj21 = new Car("XXSY1");
// 访问字段
console.log("读取发动机型号 :  " + obj21.engine);
// 访问方法
obj21.disp();
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str1 = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var objm = new Encapsulate();
console.log(objm.str1); // 可访问 
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var objn = new AgriLoan(10, 1);
console.log("利润为 : " + objn.interest + "，抽成为 : " + objn.rebate);
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting; //方法
    };
    return Greeter;
}());
var greeter2 = new Greeter("world 2");
console.log(greeter2.greet());
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
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
var passcode = "secret passcode";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employeeM = new Employee();
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
