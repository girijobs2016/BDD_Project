import { Before, After, Status } from "cucumber";
import { browser } from "protractor";

Before(function () {
    console.log('test execution started');
    browser.manage().window().maximize()
});

After(async function (scenario) {
    console.log('Test completed');
    if (scenario.result.status === Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "screenshot/png");
    }
});