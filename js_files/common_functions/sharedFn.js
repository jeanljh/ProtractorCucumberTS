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
class SharedFn {
    SelectComboBox(elm, val) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield elm.reduce((acc, elm, idx) => {
                if (acc)
                    return acc;
                return elm.getText().then(text => {
                    if (text.localeCompare(val, 'en', { sensitivity: 'base' }) === 0) {
                        elm.click();
                        return true;
                    }
                    return false;
                });
            }, false);
        });
    }
}
exports.SharedFn = SharedFn;
