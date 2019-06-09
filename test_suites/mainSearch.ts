import { Given, When, Then } from "cucumber";
import { protractor } from "protractor/built/ptor";
import { MainSearchPO } from "../page_objects/mainSearchPO";
import { MainSearchPF } from "../page_functions/mainSearchPF";
import { browser, ProtractorExpectedConditions, ExpectedConditions } from "protractor";
import { assert } from "chai";

const ec: ProtractorExpectedConditions = protractor.ExpectedConditions;
const mainSearchPO = new MainSearchPO();
const mainSearchPF = new MainSearchPF();

Given("I click Term Classes tab", async (): Promise<void> =>
    await mainSearchPO.tabTerm.click());

When('I enter {string} for term classes field', async (data: string): Promise<void> =>
    await mainSearchPF.EnterSearchText(data));

Then('I can see {string} is entered in term classes field', async (data: string): Promise<void> =>
    assert.isTrue(await mainSearchPF.ValSearchText(data)));

Given("I click All-You-Can Learn Classes tab", async (): Promise<void> =>
    await mainSearchPO.tabAll.click());

When('I enter {string} for all classes field', async (data: string): Promise<void> =>
    await mainSearchPF.EnterSearchText(data));

Then('I can see {string} is entered in all classes field', async (data: string): Promise<void> =>
    assert.isTrue(await mainSearchPF.ValSearchText(data)));