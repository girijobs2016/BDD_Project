"use strict";
exports.__esModule = true;
exports.HomePage = void 0;
var protractor_1 = require("protractor");
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.addUserTableColumnName = protractor_1.element.all(protractor_1.by.xpath("//*[@class=\"MuiTableRow-root MuiTableRow-head\"]/th"));
        this.addUserBtn = protractor_1.element(protractor_1.by.css('[class*="add-user-btn"]'));
    }
    return HomePage;
}());
exports.HomePage = HomePage;
