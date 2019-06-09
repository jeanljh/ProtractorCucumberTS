import { ElementArrayFinder, browser } from "protractor";

export class SharedFn {
    async SelectComboBox(elm: ElementArrayFinder, val: string): Promise<boolean> {
        return await elm.reduce((acc: boolean, elm: ElementArrayFinder, idx: number) => {
            if (acc) return acc;
            return elm.getText().then(text => {
                if (text.localeCompare(val, 'en', { sensitivity: 'base' }) === 0) {
                    elm.click();
                    return true;
                }
                return false;
            });
        }, false);
    }
}