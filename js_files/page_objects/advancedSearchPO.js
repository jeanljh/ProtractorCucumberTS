"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AdvancedSearchPO {
    constructor() {
        this.btnAdvancedSearch = protractor_1.$('#advanced_modal');
        this.cbbMinAge = protractor_1.$('#advanceddrpMinAge');
        this.cbbMaxAge = protractor_1.$('#advanceddrpMaxAge');
        this.cbbLocation = protractor_1.$("#searchmorewaays_modal #drpLocation");
        this.tfStartDate = protractor_1.$('#searchmorewaays_modal .StartDate');
        this.tfEndDate = protractor_1.$('#searchmorewaays_modal .EndDate');
        this.btnThisWeekend = protractor_1.$('#ThisWeekend p');
        this.btnNextWeek = protractor_1.$('#NextWeek p');
        this.btnNextWeekend = protractor_1.$('#NextWeekend p');
        this.btnPrevMonth = protractor_1.$('.datepicker-days .prev');
        this.btnNextMonth = protractor_1.$('.datepicker-days .prev');
        this.lblPickerMonthYear = protractor_1.$('.datepicker-days .picker-switch');
        this.lblPickerDay = protractor_1.$$("td[class='day today'],[class='day active'],[class='day'],[class='day weekend']");
    }
}
exports.AdvancedSearchPO = AdvancedSearchPO;
