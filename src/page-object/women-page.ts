import {browser, by, element, protractor} from "protractor";
import {Page} from "./page";

export class WomenPage extends Page {
    get pageItem() {
        return element(by.css("a[class='product-name']"));
    }
    get quantityCounter() {
        return element(by.xpath("//*[@id=\"quantity_wanted\"]"));
    }
    get addToCartButton(){
        return element(by.xpath("//button[@class='exclusive']"));
    }
    async getErrorMessage() {
        return await element(by.css('p[class=\'fancybox-error\']')).getText();
    }
    get errorPopup() {
        return element(by.css("p[class=\'fancybox-error\']"));
    }
}