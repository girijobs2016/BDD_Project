import { ElementFinder, element, by, ElementArrayFinder, WebElement } from "protractor";

export class HomePage {
    addUserTableColumnName: ElementArrayFinder;
    addUserBtn: WebElement;
    constructor(){
        this.addUserTableColumnName = element.all(by.xpath(`//*[@class="MuiTableRow-root MuiTableRow-head"]/th`));
        this.addUserBtn = element(by.css('[class*="add-user-btn"]'));
    }
}