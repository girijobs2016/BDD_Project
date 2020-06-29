"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.commonFunctions = void 0;
var protractor_1 = require("protractor");
var chai_1 = require("chai");
var CommonFunc = /** @class */ (function () {
    function CommonFunc() {
    }
    CommonFunc.prototype.launchApplication = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.get('http://localhost:3000/')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonFunc.prototype.getAppsTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.getTitle()];
                    case 1:
                        title = _a.sent();
                        console.log(typeof (title));
                        return [2 /*return*/, title];
                }
            });
        });
    };
    CommonFunc.prototype.getElementLocation = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var location;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, element.getLocation()];
                    case 1:
                        location = _a.sent();
                        console.log(typeof (location));
                        return [2 /*return*/, location];
                }
            });
        });
    };
    CommonFunc.prototype.clickOnWebElement = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, element.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonFunc.prototype.provideData = function (element, text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, element.sendKeys(text)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonFunc.prototype.selectGender = function (gender) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.css("[value=\"" + gender + "\"]")).click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonFunc.prototype.selectBusinessUnit = function (businessUnit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//li[@data-value=\"" + businessUnit + "\"]")).click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonFunc.prototype.moveToElementWaitAndClick = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.actions().mouseMove(element).perform()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(element), 5000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, element.click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonFunc.prototype.moveToElementAndClick = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.actions().mouseMove(element).click().perform()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonFunc.prototype.verifySelectedDOB = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var today, dd, current_day, selected_day, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        today = new Date();
                        dd = today.getDate();
                        current_day = dd;
                        _a = parseInt;
                        return [4 /*yield*/, element.getText()];
                    case 1:
                        selected_day = _a.apply(void 0, [_b.sent()]);
                        if (selected_day < current_day) {
                            console.log('selected date is less than current date');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonFunc.prototype.verifyAddUser = function (expectedColName, addUserTableCol) {
        return __awaiter(this, void 0, void 0, function () {
            var actualColName, i, _a, text, j;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('Verifying the Column name of Add user table..');
                        actualColName = [];
                        i = 1;
                        _b.label = 1;
                    case 1:
                        _a = i;
                        return [4 /*yield*/, addUserTableCol];
                    case 2:
                        if (!(_a <= (_b.sent()).length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//*[@class=\"MuiTableRow-root MuiTableRow-head\"]/th[" + i + "]/div")).getText()];
                    case 3:
                        text = _b.sent();
                        actualColName.push(text);
                        _b.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5:
                        console.log(actualColName);
                        for (j = 0; j < actualColName.length; j++) {
                            chai_1.expect(actualColName[j]).to.equal(expectedColName[j]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return CommonFunc;
}());
exports.commonFunctions = new CommonFunc();
