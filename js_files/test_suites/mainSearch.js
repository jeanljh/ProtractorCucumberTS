"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const ptor_1 = require("protractor/built/ptor");
const mainSearchPO_1 = require("../page_objects/mainSearchPO");
const mainSearchPF_1 = require("../page_functions/mainSearchPF");
const chai_1 = require("chai");
const ec = ptor_1.protractor.ExpectedConditions;
const mainSearchPO = new mainSearchPO_1.MainSearchPO();
const mainSearchPF = new mainSearchPF_1.MainSearchPF();
cucumber_1.Given("I click Term Classes tab", () => __awaiter(this, void 0, void 0, function* () { return yield mainSearchPO.tabTerm.click(); }));
cucumber_1.When('I enter {string} for term classes field', (data) => __awaiter(this, void 0, void 0, function* () { return yield mainSearchPF.EnterSearchText(data); }));
cucumber_1.Then('I can see {string} is entered in term classes field', (data) => __awaiter(this, void 0, void 0, function* () { return chai_1.assert.isTrue(yield mainSearchPF.ValSearchText(data)); }));
cucumber_1.Given("I click All-You-Can Learn Classes tab", () => __awaiter(this, void 0, void 0, function* () { return yield mainSearchPO.tabAll.click(); }));
cucumber_1.When('I enter {string} for all classes field', (data) => __awaiter(this, void 0, void 0, function* () { return yield mainSearchPF.EnterSearchText(data); }));
cucumber_1.Then('I can see {string} is entered in all classes field', (data) => __awaiter(this, void 0, void 0, function* () { return chai_1.assert.isTrue(yield mainSearchPF.ValSearchText(data)); }));
