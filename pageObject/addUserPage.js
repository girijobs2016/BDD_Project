"use strict";
exports.__esModule = true;
exports.AddUserPage = void 0;
var protractor_1 = require("protractor");
var AddUserPage = /** @class */ (function () {
    function AddUserPage() {
        this.firstname = protractor_1.element(protractor_1.by.id('firstname'));
        this.lastname = protractor_1.element(protractor_1.by.id('lastname'));
        this.email = protractor_1.element(protractor_1.by.id('email'));
        this.businessUnit = protractor_1.element(protractor_1.by.id('businessunit'));
        this.calendarIcon = protractor_1.element(protractor_1.by.css('button[class*="MuiIconButton-root"]'));
        this.dob = protractor_1.element(protractor_1.by.xpath("//*[@class=\"MuiPickersCalendar-week\"][1]/div[5]/button"));
        this.currentDate = protractor_1.element(protractor_1.by.css('[class*="MuiPickersDay-daySelected"]'));
        this.saveAndCloseBtn = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Save and close')]"));
        this.adminBtn = protractor_1.element(protractor_1.by.id("isAdmin"));
    }
    return AddUserPage;
}());
exports.AddUserPage = AddUserPage;
