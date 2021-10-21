import {browser, by, element, protractor} from "protractor";

export class MyAccount {
    async getcurrentUserName() {
        return await element(by.xpath("//a[contains(@class, 'account')]")).getText();
    }
}