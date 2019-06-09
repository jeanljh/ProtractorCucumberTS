import { Given, When, Then } from "cucumber";
import { AdvancedSearchPO } from "../page_objects/advancedSearchPO";
import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";
import { AdvancedSearchPF } from "../page_functions/advancedSearchPF";
import { assert } from "chai";
import { SharedFn } from "../common_functions/sharedFn";
import { UtilFn } from "../common_functions/utilFn";

const ec = protractor.ExpectedConditions;
const utilFn = new UtilFn();
const sharedFn = new SharedFn();
const advancedSearchPO = new AdvancedSearchPO();
const advancedSearchPF = new AdvancedSearchPF();
let actResult: any;


When('I click This Weekend button', async () => {
    await browser.wait(ec.elementToBeClickable(advancedSearchPO.btnAdvancedSearch),
        10000, 'Advanced Search button is not clickable');
    await advancedSearchPO.btnAdvancedSearch.click();
    await browser.wait(ec.visibilityOf(advancedSearchPO.btnThisWeekend),
        10000, 'This Weekend button is not visible');
    await browser.executeScript('arguments[0].click()', advancedSearchPO.btnThisWeekend);
});

Then('I can see this weekend start and end dates', async () => {
    const { startDate, endDate } = await advancedSearchPF.GetStartEndDates();
    const { thisSat, thisSun } = advancedSearchPF.SetThisWeekendDates();
    assert.equal(startDate.toDateString(), thisSat.toDateString(), 'Incorrect weekend start date');
    assert.equal(endDate.toDateString(), thisSun.toDateString(), 'Incorrect weekend end date');
    advancedSearchPF.SetNextWeekDates();
});

When('I click Next Week button', async () =>
    await browser.executeScript('arguments[0].click()', advancedSearchPO.btnNextWeek));

Then('I can see next week start and end dates', async () => {
    const { startDate, endDate } = await advancedSearchPF.GetStartEndDates();
    const { nextMon, nextSun } = advancedSearchPF.SetNextWeekDates();
    assert.equal(startDate.toDateString(), nextMon.toDateString(), 'Incorrect next week start date');
    assert.equal(endDate.toDateString(), nextSun.toDateString(), 'Incorrect next week end date');
});

When('I click Next Weekend button', async () =>
    await browser.executeScript('arguments[0].click()', advancedSearchPO.btnNextWeekend));

Then('I can see next weekend start and end dates', async () => {
    const { startDate, endDate } = await advancedSearchPF.GetStartEndDates();
    const { nextWeekSat, nextWeekSun } = advancedSearchPF.SetNextWeekendDates();
    assert.equal(startDate.toDateString(), nextWeekSat.toDateString(), 'Incorrect next weekend start date');
    assert.equal(endDate.toDateString(), nextWeekSun.toDateString(), 'Incorrect next weekend end date');
});

When('I select {string} from Locations combo box', async location => {
    await browser.wait(ec.elementToBeClickable(advancedSearchPO.btnAdvancedSearch),
        10000, 'Advanced Search button is not clickable');
    await advancedSearchPO.btnAdvancedSearch.click();
    await browser.executeScript('arguments[0].click()', advancedSearchPO.cbbLocation);
    assert.isTrue(await sharedFn.SelectComboBox(advancedSearchPO.cbbLocation.$$('option'), location));
});

Then('I can see {string} is selected from Locations combo box', async location => {
    await browser.sleep(1000);
    actResult = await browser.executeScript('return arguments[0].options[arguments[0].selectedIndex].text',
        advancedSearchPO.cbbLocation);
    assert.equal(actResult, location, 'Incorrect location selected');
});


When('I select {string} from min age combo box', async minAge => {
    await browser.wait(ec.elementToBeClickable(advancedSearchPO.btnAdvancedSearch),
        10000, 'Advanced Search button is not clickable');
    await advancedSearchPO.btnAdvancedSearch.click();
    await browser.executeScript('arguments[0].click()', advancedSearchPO.cbbMinAge);
    assert.isTrue(await sharedFn.SelectComboBox(advancedSearchPO.cbbMinAge.$$('option'), minAge));
});

Then('I can see {string} is selected from min age combo box', async minAge => {
    actResult = await browser.executeScript('return arguments[0].options[arguments[0].selectedIndex].text',
        advancedSearchPO.cbbMinAge);
    assert.equal(actResult, minAge, 'Incorrect min age selected');
});

When('I select {string} from max age combo box', async maxAge => {
    await browser.executeScript('arguments[0].click()', advancedSearchPO.cbbMaxAge);
    assert.isTrue(await sharedFn.SelectComboBox(advancedSearchPO.cbbMaxAge.$$('option'), maxAge));
});

Then('I can see {string} is selected from max age combo box', async maxAge => {
    actResult = await browser.executeScript('return arguments[0].options[arguments[0].selectedIndex].text',
        advancedSearchPO.cbbMaxAge);
    assert.equal(actResult, maxAge, 'Incorrect max age selected');
});

Given('I validate {string} is not after {string}', async (startDate, endDate) =>
    assert.isTrue(await advancedSearchPF.CheckInputDatesIsValidRange(startDate, endDate), 'Start date is after end date'));

When('I enter {string} and {string}', async (startDate, endDate) => {
    await browser.wait(ec.elementToBeClickable(advancedSearchPO.btnAdvancedSearch),
        10000, 'Advanced Search button is not clickable');
    await advancedSearchPO.btnAdvancedSearch.click();
    await browser.executeScript('arguments[0].value=arguments[1]', advancedSearchPO.tfStartDate, utilFn.ConvertDate(startDate));
    await browser.executeScript('arguments[0].value=arguments[1]', advancedSearchPO.tfEndDate, utilFn.ConvertDate(endDate));
});

Then('I can see {string} and {string} are entered', async (startDate, endDate) => {
    actResult = await browser.executeScript('return arguments[0].value', advancedSearchPO.tfStartDate);
    assert.equal(actResult, utilFn.ConvertDate(startDate), 'Incorrect start date entered');

    actResult = await browser.executeScript('return arguments[0].value', advancedSearchPO.tfEndDate);
    assert.equal(actResult, utilFn.ConvertDate(endDate), 'Incorrect end date entered');
});

