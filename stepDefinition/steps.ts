import { Given, When, Then } from 'cucumber';
import { browser, element, by, ExpectedConditions } from 'protractor';
import { AddUser } from '../pageObject/addUser';
import { expect } from 'chai';

const addUser = new AddUser();

Given(/^User Navigates directly to user-management page and click add user$/, async() =>  {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://localhost:3000/');
    expect(await browser.getTitle()).to.equal('User management');
    expect(await addUser.addUserBtn.getLocation()).to.contain({x: 1190.140625,y: 20});
    await addUser.addUserBtn.click();
});

When(/^User provides basic details like firstname as \"(.*)\", lastname as \"(.*)\" and email as \"(.*)\"$/, async (firstname, lastname, email) => {
    await addUser.firstname.sendKeys(`${firstname}`);
    await addUser.lastname.sendKeys(`${lastname}`);
    await addUser.email.sendKeys(`${email}`);
});

When(/^User disable admin flag indicator$/, async () => {
    await addUser.adminBtn.click();
});

When(/^User selects the required \"(.*)\" ,\"(.*)\", DOB and save the details$/, async (gender, businessUnit) =>{
    await element(by.css(`[value="${gender}"]`)).click();
    await addUser.businessUnit.click();
    await element(by.xpath(`//li[@data-value="${businessUnit}"]`)).click();
    await addUser.calendarIcon.click();
    await browser.actions().mouseMove(addUser.dob).perform();
    await browser.wait(ExpectedConditions.elementToBeClickable(addUser.dob),5000);
    await addUser.dob.click();
    await browser.actions().mouseMove(addUser.calendarIcon).click().perform();
    expect(addUser.dob).to.not.equal(addUser.currentDate);
    await browser.wait(ExpectedConditions.elementToBeClickable(addUser.saveAndCloseBtn),5000);
    await addUser.saveAndCloseBtn.click();
});

Then(/^User added successfully to user-management$/, async () => {
    await console.log('User added successfully to user-management');
 });