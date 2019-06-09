// import { protractor } from "protractor/built/ptor";
import { protractor, ProtractorExpectedConditions, browser } from "protractor";
import { Before, After, Status } from "cucumber";

const url: string = 'https://www.flyingcape.com.sg/';

Before(async function(): Promise<void> {
    await browser.get(url);
});

After(async function(scenario): Promise<void> {
    if(scenario.result.status === Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, 'image/png');
    }
});
