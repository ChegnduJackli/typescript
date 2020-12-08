
import { StringValidator } from "./Validation";

export const numberRegexp = /^[0-9]+$/;

// export class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }


//导出语句很便利，因为我们可能需要对导出的部分重命名，所以上面的例子可以这样改写：
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };