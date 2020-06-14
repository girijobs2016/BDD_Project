import { Given, When, Then } from 'cucumber';
import { browser, element, by } from 'protractor';

Given(/^Navigate to User Management Page$/, async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://localhost:3000/');
});

When(/^User provides firstname lastname email ([^"]*) dob ([^"]*)$/, async (gender: string, businessUnit: string) => {
    await element(by.css('[class*="add-user-btn"]')).click();
    await element(by.id('firstname')).sendKeys('demo');
    await element(by.id('lastname')).sendKeys('test');
    await element(by.id('email')).sendKeys('demo123@test.com');
    await element(by.id('DOB')).clear().then(function () {
        element(by.id('DOB')).sendKeys('04101993');
    });
    await element(by.css(`[name="gender" ][ value="${gender}"]`)).click();
    await element(by.id('businessunit')).click().then(function () {
        element(by.xpath(`//li[@data-value="${businessUnit}"]`)).click();
    });
});

Then(/^click on save and close button$/, async () => {
    await element(by.id("isAdmin")).click();
});

Then(/^Enable Admin button$/, async () => {
    await element(by.id("isAdmin")).click();
});

Then(/^User added successfully$/, async () => {
    console.log('User added successfully')
});