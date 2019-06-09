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
const cucumber_1 = require("cucumber");
const advancedSearchPO_1 = require("../page_objects/advancedSearchPO");
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
const advancedSearchPF_1 = require("../page_functions/advancedSearchPF");
const chai_1 = require("chai");
const sharedFn_1 = require("../common_functions/sharedFn");
const utilFn_1 = require("../common_functions/utilFn");
const ec = ptor_1.protractor.ExpectedConditions;
const utilFn = new utilFn_1.UtilFn();
const sharedFn = new sharedFn_1.SharedFn();
const advancedSearchPO = new advancedSearchPO_1.AdvancedSearchPO();
const advancedSearchPF = new advancedSearchPF_1.AdvancedSearchPF();
let actResult;
cucumber_1.When('I click This Weekend button', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(ec.elementToBeClickable(advancedSearchPO.btnAdvancedSearch), 10000, 'Advanced Search button is not clickable');
    yield advancedSearchPO.btnAdvancedSearch.click();
    yield protractor_1.browser.wait(ec.visibilityOf(advancedSearchPO.btnThisWeekend), 10000, 'This Weekend button is not visible');
    yield protractor_1.browser.executeScript('arguments[0].click()', advancedSearchPO.btnThisWeekend);
}));
cucumber_1.Then('I can see this weekend start and end dates', () => __awaiter(this, void 0, void 0, function* () {
    const { startDate, endDate } = yield advancedSearchPF.GetStartEndDates();
    const { thisSat, thisSun } = advancedSearchPF.SetThisWeekendDates();
    chai_1.assert.equal(startDate.toDateString(), thisSat.toDateString(), 'Incorrect weekend start date');
    chai_1.assert.equal(endDate.toDateString(), thisSun.toDateString(), 'Incorrect weekend end date');
    advancedSearchPF.SetNextWeekDates();
}));
cucumber_1.When('I click Next Week button', () => __awaiter(this, void 0, void 0, function* () { return yield protractor_1.browser.executeScript('arguments[0].click()', advancedSearchPO.btnNextWeek); }));
cucumber_1.Then('I can see next week start and end dates', () => __awaiter(this, void 0, void 0, function* () {
    const { startDate, endDate } = yield advancedSearchPF.GetStartEndDates();
    const { nextMon, nextSun } = advancedSearchPF.SetNextWeekDates();
    chai_1.assert.equal(startDate.toDateString(), nextMon.toDateString(), 'Incorrect next week start date');
    chai_1.assert.equal(endDate.toDateString(), nextSun.toDateString(), 'Incorrect next week end date');
}));
cucumber_1.When('I click Next Weekend button', () => __awaiter(this, void 0, void 0, function* () { return yield protractor_1.browser.executeScript('arguments[0].click()', advancedSearchPO.btnNextWeekend); }));
cucumber_1.Then('I can see next weekend start and end dates', () => __awaiter(this, void 0, void 0, function* () {
    const { startDate, endDate } = yield advancedSearchPF.GetStartEndDates();
    const { nextWeekSat, nextWeekSun } = advancedSearchPF.SetNextWeekendDates();
    chai_1.assert.equal(startDate.toDateString(), nextWeekSat.toDateString(), 'Incorrect next weekend start date');
    chai_1.assert.equal(endDate.toDateString(), nextWeekSun.toDateString(), 'Incorrect next weekend end date');
}));
cucumber_1.When('I select {string} from Locations combo box', (location) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(ec.elementToBeClickable(advancedSearchPO.btnAdvancedSearch), 10000, 'Advanced Search button is not clickable');
    yield advancedSearchPO.btnAdvancedSearch.click();
    yield protractor_1.browser.executeScript('arguments[0].click()', advancedSearchPO.cbbLocation);
    chai_1.assert.isTrue(yield sharedFn.SelectComboBox(advancedSearchPO.cbbLocation.$$('option'), location));
}));
cucumber_1.Then('I can see {string} is selected from Locations combo box', (location) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1000);
    actResult = yield protractor_1.browser.executeScript('return arguments[0].options[arguments[0].selectedIndex].text', advancedSearchPO.cbbLocation);
    chai_1.assert.equal(actResult, location, 'Incorrect location selected');
}));
cucumber_1.When('I select {string} from min age combo box', (minAge) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(ec.elementToBeClickable(advancedSearchPO.btnAdvancedSearch), 10000, 'Advanced Search button is not clickable');
    yield advancedSearchPO.btnAdvancedSearch.click();
    yield protractor_1.browser.executeScript('arguments[0].click()', advancedSearchPO.cbbMinAge);
    chai_1.assert.isTrue(yield sharedFn.SelectComboBox(advancedSearchPO.cbbMinAge.$$('option'), minAge));
}));
cucumber_1.Then('I can see {string} is selected from min age combo box', (minAge) => __awaiter(this, void 0, void 0, function* () {
    actResult = yield protractor_1.browser.executeScript('return arguments[0].options[arguments[0].selectedIndex].text', advancedSearchPO.cbbMinAge);
    chai_1.assert.equal(actResult, minAge, 'Incorrect min age selected');
}));
cucumber_1.When('I select {string} from max age combo box', (maxAge) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.executeScript('arguments[0].click()', advancedSearchPO.cbbMaxAge);
    chai_1.assert.isTrue(yield sharedFn.SelectComboBox(advancedSearchPO.cbbMaxAge.$$('option'), maxAge));
}));
cucumber_1.Then('I can see {string} is selected from max age combo box', (maxAge) => __awaiter(this, void 0, void 0, function* () {
    actResult = yield protractor_1.browser.executeScript('return arguments[0].options[arguments[0].selectedIndex].text', advancedSearchPO.cbbMaxAge);
    chai_1.assert.equal(actResult, maxAge, 'Incorrect max age selected');
}));
cucumber_1.Given('I validate {string} is not after {string}', (startDate, endDate) => __awaiter(this, void 0, void 0, function* () { return chai_1.assert.isTrue(yield advancedSearchPF.CheckInputDatesIsValidRange(startDate, endDate), 'Start date is after end date'); }));
cucumber_1.When('I enter {string} and {string}', (startDate, endDate) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(ec.elementToBeClickable(advancedSearchPO.btnAdvancedSearch), 10000, 'Advanced Search button is not clickable');
    yield advancedSearchPO.btnAdvancedSearch.click();
    yield protractor_1.browser.executeScript('arguments[0].value=arguments[1]', advancedSearchPO.tfStartDate, utilFn.ConvertDate(startDate));
    yield protractor_1.browser.executeScript('arguments[0].value=arguments[1]', advancedSearchPO.tfEndDate, utilFn.ConvertDate(endDate));
}));
cucumber_1.Then('I can see {string} and {string} are entered', (startDate, endDate) => __awaiter(this, void 0, void 0, function* () {
    actResult = yield protractor_1.browser.executeScript('return arguments[0].value', advancedSearchPO.tfStartDate);
    chai_1.assert.equal(actResult, utilFn.ConvertDate(startDate), 'Incorrect start date entered');
    actResult = yield protractor_1.browser.executeScript('return arguments[0].value', advancedSearchPO.tfEndDate);
    chai_1.assert.equal(actResult, utilFn.ConvertDate(endDate), 'Incorrect end date entered');
}));
