import { browser, WebElement, element, by, ExpectedConditions, ElementFinder, ElementArrayFinder } from 'protractor';
import {expect} from 'chai';

class CommonFunc {
    async launchApplication() {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://localhost:3000/');
    }

    async getAppsTitle(): Promise<string> {
        const title = await browser.getTitle();
        console.log(typeof (title));
        return title;
    }

    async getElementLocation(element: WebElement): Promise<object> {
        const location = await element.getLocation();
        console.log(typeof (location));
        return location;
    }

    async clickOnWebElement(element: WebElement) {
        await element.click();
    }

    async provideData(element: WebElement, text: string) {
        await element.sendKeys(text);
    }

    async selectGender(gender: string) {
        await element(by.css(`[value="${gender}"]`)).click();
    }

    async selectBusinessUnit(businessUnit: string) {
        await element(by.xpath(`//li[@data-value="${businessUnit}"]`)).click();
    }

    async moveToElementWaitAndClick(element: ElementFinder) {
        await browser.actions().mouseMove(element).perform();
        await browser.wait(ExpectedConditions.elementToBeClickable(element), 5000);
        await element.click();
    }

    async moveToElementAndClick(element: ElementFinder) {
        await browser.actions().mouseMove(element).click().perform();
    }

    async verifySelectedDOB(element: WebElement) {
        var today = new Date();
        var dd = today.getDate();
        const current_day = dd;
        const selected_day = parseInt(await element.getText());
        if (selected_day < current_day) {
            console.log('selected date is less than current date');
        }
    }

    async verifyAddUser(expectedColName: string[], addUserTableCol:ElementFinder[]) {
        console.log('Verifying the Column name of Add user table..');
        let actualColName: string[] = [];
        for (let i = 1; i <= (await addUserTableCol).length; i++) {
            const text = await element(by.xpath(`//*[@class="MuiTableRow-root MuiTableRow-head"]/th[${i}]/div`)).getText();
            actualColName.push(text);
        }
        console.log(actualColName);
        for (let j = 0; j < actualColName.length; j++) {
            expect(actualColName[j]).to.equal(expectedColName[j]);
        }
    }
}

export const commonFunctions: CommonFunc = new CommonFunc();