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
var cucumber_1 = require("cucumber");
var addUserPage_1 = require("../pageObject/addUserPage");
var homePage_1 = require("../pageObject/homePage");
var chai_1 = require("chai");
var commonFunc_1 = require("../stepFunction/commonFunc");
var addUserPage = new addUserPage_1.AddUserPage();
var homePage = new homePage_1.HomePage();
cucumber_1.Given(/^User Navigates directly to user-management page$/, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0: return [4 /*yield*/, commonFunc_1.commonFunctions.launchApplication()];
            case 1:
                _g.sent();
                _a = chai_1.expect;
                return [4 /*yield*/, commonFunc_1.commonFunctions.getAppsTitle()];
            case 2:
                _a.apply(void 0, [_g.sent()]).to.equal('User management');
                console.log('Verifying Location of WebElement..');
                _b = chai_1.expect;
                _d = (_c = commonFunc_1.commonFunctions).getElementLocation;
                return [4 /*yield*/, homePage.addUserBtn];
            case 3: return [4 /*yield*/, _d.apply(_c, [_g.sent()])];
            case 4:
                _b.apply(void 0, [_g.sent()]).to.contain({ x: 1190.140625, y: 20 });
                _f = (_e = commonFunc_1.commonFunctions).clickOnWebElement;
                return [4 /*yield*/, homePage.addUserBtn];
            case 5: return [4 /*yield*/, _f.apply(_e, [_g.sent()])];
            case 6:
                _g.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Admin creates user by providing mandatory details "(.*)","(.*)","(.*)","(.*)","(.*)",DOB and "(.*)" and save the details$/, function (firstname, lastname, email, gender, businessUnit, adminFlag) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    return __generator(this, function (_v) {
        switch (_v.label) {
            case 0:
                _b = (_a = commonFunc_1.commonFunctions).provideData;
                return [4 /*yield*/, addUserPage.firstname];
            case 1: return [4 /*yield*/, _b.apply(_a, [_v.sent(), firstname])];
            case 2:
                _v.sent();
                _d = (_c = commonFunc_1.commonFunctions).provideData;
                return [4 /*yield*/, addUserPage.lastname];
            case 3: return [4 /*yield*/, _d.apply(_c, [_v.sent(), lastname])];
            case 4:
                _v.sent();
                _f = (_e = commonFunc_1.commonFunctions).provideData;
                return [4 /*yield*/, addUserPage.email];
            case 5: return [4 /*yield*/, _f.apply(_e, [_v.sent(), email])];
            case 6:
                _v.sent();
                return [4 /*yield*/, commonFunc_1.commonFunctions.selectGender(gender)];
            case 7:
                _v.sent();
                _h = (_g = commonFunc_1.commonFunctions).clickOnWebElement;
                return [4 /*yield*/, addUserPage.businessUnit];
            case 8: return [4 /*yield*/, _h.apply(_g, [_v.sent()])];
            case 9:
                _v.sent();
                return [4 /*yield*/, commonFunc_1.commonFunctions.selectBusinessUnit(businessUnit)];
            case 10:
                _v.sent();
                _k = (_j = commonFunc_1.commonFunctions).clickOnWebElement;
                return [4 /*yield*/, addUserPage.calendarIcon];
            case 11: return [4 /*yield*/, _k.apply(_j, [_v.sent()])];
            case 12:
                _v.sent();
                _m = (_l = commonFunc_1.commonFunctions).moveToElementWaitAndClick;
                return [4 /*yield*/, addUserPage.dob];
            case 13: return [4 /*yield*/, _m.apply(_l, [_v.sent()])];
            case 14:
                _v.sent();
                _p = (_o = commonFunc_1.commonFunctions).moveToElementAndClick;
                return [4 /*yield*/, addUserPage.calendarIcon];
            case 15: return [4 /*yield*/, _p.apply(_o, [_v.sent()])];
            case 16:
                _v.sent();
                console.log('Verifying Selected date is not equal to Current date...');
                _r = (_q = commonFunc_1.commonFunctions).verifySelectedDOB;
                return [4 /*yield*/, addUserPage.dob];
            case 17: return [4 /*yield*/, _r.apply(_q, [_v.sent()])];
            case 18:
                _v.sent();
                _s = chai_1.expect;
                return [4 /*yield*/, addUserPage.dob];
            case 19:
                _s.apply(void 0, [_v.sent()]).to.not.equal(addUserPage.currentDate);
                if (!(adminFlag === 'yes')) return [3 /*break*/, 21];
                return [4 /*yield*/, commonFunc_1.commonFunctions.clickOnWebElement(addUserPage.adminBtn)];
            case 20:
                _v.sent();
                _v.label = 21;
            case 21:
                _u = (_t = commonFunc_1.commonFunctions).moveToElementWaitAndClick;
                return [4 /*yield*/, addUserPage.saveAndCloseBtn];
            case 22: return [4 /*yield*/, _u.apply(_t, [_v.sent()])];
            case 23:
                _v.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify user added to user-management successfully "(.*)"$/, function (verifyColName) { return __awaiter(void 0, void 0, void 0, function () {
    var expectedColName, _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!(verifyColName === 'yes')) return [3 /*break*/, 3];
                expectedColName = ['First Name', 'Last Name', 'Email', 'DOB', 'Gender', 'Is Admin', 'Business Unit', 'Actions'];
                _b = (_a = commonFunc_1.commonFunctions).verifyAddUser;
                _c = [expectedColName];
                return [4 /*yield*/, homePage.addUserTableColumnName];
            case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent()]))];
            case 2:
                _d.sent();
                _d.label = 3;
            case 3: return [4 /*yield*/, console.log('verify used added to user-management successfully')];
            case 4:
                _d.sent();
                return [2 /*return*/];
        }
    });
}); });
