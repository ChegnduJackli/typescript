//如果我们想在 TypeScript 中引用上面的代码，则需要设置声明文件 Calc.d.ts，代码如下：
//声明文件不包含实现，它只是类型声明，把声明文件加入到 TypeScript 中：
//声明文件 声明文件以 .d.ts 为后缀
declare module Runoob{
    export class Calc{
        doSum(limit:number):number;
    }
}