import {browser, by, element, protractor} from "protractor";
import {Page} from "./page";

export class MainPage extends Page {
    get signInButton() {
        return element(by.css(".header_user_info a.login"));
    }
    get searchField() {
        return element(by.xpath("//*[@id=\"search_query_top\"]"));
    }
    async searchForItem(searchExpression: string) {
        await this.searchField.sendKeys(searchExpression);
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }
    get searchCounter() {
        return element(by.xpath("//*[@class=\"heading-counter\"]"));
    }
    get resultProductTitles() {
        return element.all(by.css("div.product-container a.product-name"));
    }
    get firstImage() {
        return element(by.xpath("(//ul[@id='homefeatured']/li)[1]//img"));
    }
    get openCart() {
        return element(by.xpath("//*[@class=\"shopping_cart\"]/a"));
    }
    async changeCategory(searchExpression: string){
        await browser.element(by.xpath("//a[@title='"+searchExpression+"']")).click();
    }
    async changeSubcategory(searchExpression: string) {
        await browser.element(by.xpath("//*[contains(@class,'subcategory-name') and text()='"+searchExpression+"']")).click();
    }
}