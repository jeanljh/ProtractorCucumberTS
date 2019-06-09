import { browser } from "protractor";
import { AdvancedSearchPO } from "../page_objects/advancedSearchPO";

const advancedSearchPO = new AdvancedSearchPO();

export class AdvancedSearchPF {

    async GetStartEndDates() {
        const strStartDate: string = await browser.executeScript('return arguments[0].value', advancedSearchPO.tfStartDate);
        const arrStartDate = strStartDate.split('/');
        const startDate = new Date(parseInt(arrStartDate[2]), parseInt(arrStartDate[1]) - 1, parseInt(arrStartDate[0]));

        const strEndDate: string = await browser.executeScript('return arguments[0].value', advancedSearchPO.tfEndDate);
        const arrEndDate = strEndDate.split('/');
        const endDate = new Date(parseInt(arrEndDate[2]), parseInt(arrEndDate[1]) - 1, parseInt(arrEndDate[0]));

        return { startDate, endDate }
    }

    SetThisWeekendDates() {
        const today = new Date();
        let thisSat = new Date(today.setDate(today.getDate() + (6 - today.getDay())));
        let thisSun = new Date(today.setDate(today.getDate() + 1));
        return { thisSat, thisSun }
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

    CheckInputDatesIsValidRange(strFromDate: string, strToDate: string) {
        return new Date(strFromDate) <= new Date(strToDate);
    }

    async SelectDatePicker(strDate: string) {
        let inputDate = new Date(strDate);
        let currDate = new Date(await advancedSearchPO.lblPickerMonthYear.getText());
        while (true) {
            if (inputDate.getFullYear() < currDate.getFullYear()) {
                await browser.executeScript('arguments[0].click()', advancedSearchPO.btnPrevMonth);
            }
            else if (inputDate.getFullYear() > currDate.getFullYear()) {
                await browser.executeScript('arguments[0].click()', advancedSearchPO.btnNextMonth);
            }
            else if (inputDate.getMonth() < currDate.getMonth()) {
                await browser.executeScript('arguments[0].click()', advancedSearchPO.btnPrevMonth);
            }
            else if (inputDate.getMonth() > currDate.getMonth()) {
                await browser.executeScript('arguments[0].click()', advancedSearchPO.btnNextMonth);
            }
            else break;
        }
    }
}