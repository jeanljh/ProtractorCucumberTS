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
const mainSearchPO_1 = require("../page_objects/mainSearchPO");
const mainSearchPO = new mainSearchPO_1.MainSearchPO();
let arrVal, i;
class MainSearchPF {
    EnterSearchText(val) {
        return __awaiter(this, void 0, void 0, function* () {
            arrVal = val.split(',').map(v => v.trim());
            for (i = 0; i < arrVal.length; i++) {
                yield mainSearchPO.tfInput.sendKeys(arrVal[i]);
            }
        });
    }
    ValSearchText(val) {
        return __awaiter(this, void 0, void 0, function* () {
            const count = yield mainSearchPO.txtInput.count();
            for (i = 0; i < count; i++) {
                const actResult = yield mainSearchPO.txtInput.get(i).getText().then(t => t.slice(0, -1));
                const expResult = arrVal[arrVal.length - 1 - i];
                if (actResult !== expResult) {
                    return false;
                }
            }
            return true;
        });
    }
}
exports.MainSearchPF = MainSearchPF;
