"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const advancedSearchPO_1 = require("../page_objects/advancedSearchPO");
const advancedSearchPO = new advancedSearchPO_1.AdvancedSearchPO();
class AdvancedSearchPF {
    GetStartEndDates() {
        return __awaiter(this, void 0, void 0, function* () {
            const strStartDate = yield protractor_1.browser.executeScript('return arguments[0].value', advancedSearchPO.tfStartDate);
            const arrStartDate = strStartDate.split('/');
            const startDate = new Date(parseInt(arrStartDate[2]), parseInt(arrStartDate[1]) - 1, parseInt(arrStartDate[0]));
            const strEndDate = yield protractor_1.browser.executeScript('return arguments[0].value', advancedSearchPO.tfEndDate);
            const arrEndDate = strEndDate.split('/');
            const endDate = new Date(parseInt(arrEndDate[2]), parseInt(arrEndDate[1]) - 1, parseInt(arrEndDate[0]));
            return { startDate, endDate };
        });
    }
    SetThisWeekendDates() {
        const today = new Date();
        let thisSat = new Date(today.setDate(today.getDate() + (6 - today.getDay())));
        let thisSun = new Date(today.setDate(today.getDate() + 1));
        return { thisSat, thisSun };
    }
    SetNextWeekDates() {
        const { thisSun } = this.SetThisWeekendDates();
        const nextMon = new Date(thisSun.setDate(thisSun.getDate() + 1));
        const nextSun = new Date(thisSun.setDate(thisSun.getDate() + 6));
        return { nextMon, nextSun };
    }
    SetNextWeekendDates() {
        const { nextSun } = this.SetNextWeekDates();
        const nextWeekSun = new Date(nextSun);
        const nextWeekSat = new Date(nextSun.setDate(nextSun.getDate() - 1));
        return { nextWeekSat, nextWeekSun };
    }
    CheckInputDatesIsValidRange(strFromDate, strToDate) {
        return new Date(strFromDate) <= new Date(strToDate);
    }
    SelectDatePicker(strDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let inputDate = new Date(strDate);
            let currDate = new Date(yield advancedSearchPO.lblPickerMonthYear.getText());
            while (true) {
                if (inputDate.getFullYear() < currDate.getFullYear()) {
                    yield protractor_1.browser.executeScript('arguments[0].click()', advancedSearchPO.btnPrevMonth);
                }
                else if (inputDate.getFullYear() > currDate.getFullYear()) {
                    yield protractor_1.browser.executeScript('arguments[0].click()', advancedSearchPO.btnNextMonth);
                }
                else if (inputDate.getMonth() < currDate.getMonth()) {
                    yield protractor_1.browser.executeScript('arguments[0].click()', advancedSearchPO.btnPrevMonth);
                }
                else if (inputDate.getMonth() > currDate.getMonth()) {
                    yield protractor_1.browser.executeScript('arguments[0].click()', advancedSearchPO.btnNextMonth);
                }
                else
                    break;
            }
        });
    }
}
exports.AdvancedSearchPF = AdvancedSearchPF;
