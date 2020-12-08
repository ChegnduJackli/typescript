function identity<T>(arg: T): T {
    //console.log(arg.length); //Error: T doesn't have .length
    return arg;
    
}

let output = identity<string>("mystring");
console.log(output);

let output1 = identity("mystring1");
console.log(output1);

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

let output2 = loggingIdentity<number>([1,2,3]);
console.log(output2);

let output3 = loggingIdentity<string>(['1','2','3','4']);
console.log(output3);



function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

let output4 = loggingIdentity2<string>(new Array('g','h'));
console.log(output4);

//泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

let output6 = myGenericNumber.add(28,3);
console.log(output6);

//泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity3<T extends Lengthwise>(arg: T): T {
    console.log("arg",arg);
    console.log("length",arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity3({length: 10, value: 3});

