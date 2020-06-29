import { Given, When, Then } from 'cucumber';
import { AddUserPage } from '../pageObject/addUserPage';
import { HomePage } from '../pageObject/homePage';
import {expect} from 'chai';
import { commonFunctions } from '../stepFunction/commonFunc';
import { browser } from 'protractor';

const addUserPage = new AddUserPage();
const homePage = new HomePage();

Given(/^User Navigates directly to user-management page$/, async() =>  {
    await commonFunctions.launchApplication();
    expect(await commonFunctions.getAppsTitle()).to.equal('User management');

    console.log('Verifying Location of WebElement..');
    expect(await commonFunctions.getElementLocation(await homePage.addUserBtn)).to.contain({x: 1190.140625,y: 20});
    await commonFunctions.clickOnWebElement(await homePage.addUserBtn);
});

When(/^Admin creates user by providing mandatory details "(.*)","(.*)","(.*)","(.*)","(.*)",DOB and "(.*)" and save the details$/, async (firstname:string, lastname:string, email:string, gender:string, businessUnit:string, adminFlag:string) => {
    await commonFunctions.provideData(await addUserPage.firstname, firstname);
    await commonFunctions.provideData(await addUserPage.lastname, lastname);
    await commonFunctions.provideData(await addUserPage.email, email);
    await commonFunctions.selectGender(gender);
    await commonFunctions.clickOnWebElement(await addUserPage.businessUnit);
    await commonFunctions.selectBusinessUnit(businessUnit);
    await commonFunctions.clickOnWebElement(await addUserPage.calendarIcon);
    await commonFunctions.moveToElementWaitAndClick(await addUserPage.dob);
    await commonFunctions.moveToElementAndClick(await addUserPage.calendarIcon);

    console.log('Verifying Selected date is not equal to Current date...');
    await commonFunctions.verifySelectedDOB(await addUserPage.dob);
    expect(await addUserPage.dob).to.not.equal(addUserPage.currentDate);

    if(adminFlag === 'yes') {
       await commonFunctions.clickOnWebElement(addUserPage.adminBtn);
    }
    
    await commonFunctions.moveToElementWaitAndClick(await addUserPage.saveAndCloseBtn);
});

Then(/^verify user added to user-management successfully "(.*)"$/, async (verifyColName) => {
    if (verifyColName === 'yes'){
        const expectedColName: string[]=['First Name','Last Name','Email','DOB','Gender','Is Admin','Business Unit','Actions'];
        await commonFunctions.verifyAddUser(expectedColName,await homePage.addUserTableColumnName);
    }
    await console.log('verify used added to user-management successfully');
});