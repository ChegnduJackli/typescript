define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mainValidator = exports.ZipCodeValidator = exports.numberRegexp = void 0;
    exports.numberRegexp = /^[0-9]+$/;
    // export class ZipCodeValidator implements StringValidator {
    //     isAcceptable(s: string) {
    //         return s.length === 5 && numberRegexp.test(s);
    //     }
    // }
    //导出语句很便利，因为我们可能需要对导出的部分重命名，所以上面的例子可以这样改写：
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && exports.numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    exports.ZipCodeValidator = ZipCodeValidator;
    exports.mainValidator = ZipCodeValidator;
});
//# sourceMappingURL=ZipCodeValidator.js.map