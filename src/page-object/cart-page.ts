import { by, element } from "protractor";

export class CartPage {
    get numberOfItems() {
        return element.all(by.xpath("//tr[contains(@class,'cart_item')]")).count();
    }
    getItemTitle(itemCount: number) {
        return element.all(by.xpath("//tr[contains(@class, 'cart_item')]//td[@class='cart_description']/p/a")).get(itemCount);
    }
}