interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10};

namespace Animal {
     let haveMuscles = true;

    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}

// namespace Animal {
//     export function doAnimalsHaveMuscles() {
//         return haveMuscles;  // Error, because haveMuscles is not accessible here
//     }
// }

function buildLabel(name: string): string {
    return buildLabelCC.prefix + name + buildLabelCC.suffix;
}

namespace buildLabelCC {
    export let suffix = " end ";
    export let prefix = "Hello, ";
}

console.log(buildLabel("Sam Smith"));


function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {}
}