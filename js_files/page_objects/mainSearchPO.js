"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class MainSearchPO {
    constructor() {
        this.txtInput = protractor_1.$$("#mtSearch [class$='choice']:not(span)");
        this.tfInput = protractor_1.$('#searchbox1');
        this.tabTerm = protractor_1.element(protractor_1.by.id('lstRegular'));
        this.tabAll = protractor_1.element(protractor_1.by.id('lstALB'));
        this.btnClearInput = protractor_1.$('.clearsearch_span_destop');
    }
}
exports.MainSearchPO = MainSearchPO;
