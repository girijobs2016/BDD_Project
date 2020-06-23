import { Given, When, Then } from 'cucumber';
import { browser, element, by } from 'protractor';
import { AddUser } from '../pageObject/addUser';

const addUser = new AddUser();

Given(/^Navigate to User Management Page$/, async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://localhost:3000/');
});

When('User provides {string} {string} {string}', async function (firstname, lastname, email) {
    await addUser.addUserBtn.click();
    await addUser.firstname.sendKeys(`${firstname}`);
    await addUser.lastname.sendKeys(`${lastname}`);
    await addUser.email.sendKeys(`${email}`);
});

Then('select {string} {string}', async function (gender, businessUnit) {
    await element(by.css(`[value="${gender}"]`)).click();
    await addUser.businessUnit.click().then(function () {
        element(by.xpath(`//li[@data-value="${businessUnit}"]`)).click();
    });
});

Then('select DOB', async function () {
    await addUser.calendarIcon.click().then( async function(){
        browser.actions().mouseMove(addUser.dob).click().perform()      
    })
    browser.actions().mouseMove(addUser.calendarIcon).click().perform();
});

Then(/^click on save and close button$/, async () => {
    await addUser.saveAndCloseBtn.isDisplayed().then(function(){
        addUser.saveAndCloseBtn.click();
    })
});

Then(/^Disable Admin button$/, async () => {
    if(addUser.adminBtn.isEnabled()){
       addUser.adminBtn.click();
    }
});

Then(/^User added successfully$/, async () => {
    console.log('User added successfully')
});