import { by, element } from "protractor";

export class Page {
    async getErrorMessage() {
        return await element(by.css('div.alert ol')).getText();
    }
}