import {browser, by, element, protractor} from "protractor";

export class WomenPage {
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



}}