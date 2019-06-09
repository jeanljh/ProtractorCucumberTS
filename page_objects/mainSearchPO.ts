import { ElementArrayFinder, $$, $, ElementFinder, element, by } from "protractor";

export class MainSearchPO {
    txtInput: ElementArrayFinder = $$("#mtSearch [class$='choice']:not(span)");
    tfInput: ElementFinder = $('#searchbox1'); 
    tabTerm: ElementFinder = element(by.id('lstRegular'));
    tabAll: ElementFinder = element(by.id('lstALB'));
    btnClearInput: ElementFinder = $('.clearsearch_span_destop');
}