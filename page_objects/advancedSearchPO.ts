import { ElementFinder, $, ElementArrayFinder, $$ } from "protractor";

export class AdvancedSearchPO {
    btnAdvancedSearch: ElementFinder = $('#advanced_modal');
    cbbMinAge: ElementFinder = $('#advanceddrpMinAge');
    cbbMaxAge: ElementFinder = $('#advanceddrpMaxAge');
    cbbLocation: ElementFinder = $("#searchmorewaays_modal #drpLocation");
    tfStartDate: ElementFinder = $('#searchmorewaays_modal .StartDate');
    tfEndDate: ElementFinder = $('#searchmorewaays_modal .EndDate');
    btnThisWeekend: ElementFinder = $('#ThisWeekend p');
    btnNextWeek: ElementFinder = $('#NextWeek p');
    btnNextWeekend: ElementFinder = $('#NextWeekend p');
    btnPrevMonth: ElementFinder = $('.datepicker-days .prev');
    btnNextMonth: ElementFinder = $('.datepicker-days .prev');
    lblPickerMonthYear: ElementFinder = $('.datepicker-days .picker-switch');
    lblPickerDay: ElementArrayFinder = $$("td[class='day today'],[class='day active'],[class='day'],[class='day weekend']");
}