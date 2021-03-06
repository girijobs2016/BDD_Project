import { WebElement, ElementFinder } from "protractor";
import {element, by} from "protractor";

export class AddUserPage{
    firstname: WebElement;
    lastname: WebElement;
    email:WebElement;
    businessUnit: WebElement;
    calendarIcon: ElementFinder;
    dob: ElementFinder;
    saveAndCloseBtn: ElementFinder;
    adminBtn: WebElement;
    currentDate: WebElement;
    genderBtn: WebElement;
   
    constructor(){
        this.firstname = element(by.id('firstname'));
        this.lastname = element(by.id('lastname'));
        this.email = element(by.id('email'));
        this.businessUnit = element(by.id('businessunit'));
        this.calendarIcon = element(by.css('button[class*="MuiIconButton-root"]'));
        this.dob = element(by.xpath(`//*[@class="MuiPickersCalendar-week"][1]/div[5]/button`));
        this.currentDate = element(by.css('[class*="MuiPickersDay-daySelected"]'));
        this.saveAndCloseBtn = element(by.xpath(`//*[contains(text(),'Save and close')]`));
        this.adminBtn = element(by.id("isAdmin"));
    }
}