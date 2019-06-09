"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UtilFn {
    ConvertDate(strDate) {
        let strDay = new Date(strDate).getDate();
        strDay = strDay < 0 ? '0' + strDay : strDay;
        let strMonth = new Date(strDate).getMonth() + 1;
        strMonth = strMonth < 0 ? '0' + strMonth : strMonth;
        let strYear = new Date(strDate).getFullYear();
        return [strDay, strMonth, strYear].join('/');
    }
}
exports.UtilFn = UtilFn;
