export class UtilFn {

    ConvertDate(strDate: string): string {
        let strDay: number | string = new Date(strDate).getDate();
        strDay = strDay < 0 ? '0' + strDay : strDay;
        let strMonth: number | string = new Date(strDate).getMonth() + 1;
        strMonth = strMonth < 0 ? '0' + strMonth : strMonth;
        let strYear: number | string = new Date(strDate).getFullYear();
        return [strDay, strMonth, strYear].join('/');
    }
}