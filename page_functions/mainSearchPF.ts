import { MainSearchPO } from "../page_objects/mainSearchPO";

const mainSearchPO = new MainSearchPO();
let arrVal: string[], i: number;

export class MainSearchPF {
    async EnterSearchText(val: string) {
        arrVal = val.split(',').map(v => v.trim());        
        for (i = 0; i < arrVal.length; i++) {
            await mainSearchPO.tfInput.sendKeys(arrVal[i]);         
        }
    }

    async ValSearchText(val: string) {
        const count = await mainSearchPO.txtInput.count();
        for (i = 0; i < count; i++) {
            const actResult = await mainSearchPO.txtInput.get(i).getText().then(t => t.slice(0, -1));
            const expResult = arrVal[arrVal.length - 1 - i];
            if (actResult !== expResult) {
                return false;
            }           
        }
        return true;
    }
}