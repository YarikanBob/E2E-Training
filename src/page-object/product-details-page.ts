import {by, element} from "protractor";

export class ProductDetailsPage {

    get addToCartButton() {
        return element(by.xpath("//*[@id=\"add_to_cart\"]"));
    }
    get itemTitle() {
        return element(by.xpath("//*[@itemprop=\"name\"]"));
    }
    get itemPrice() {
        return element(by.xpath("//*[@itemprop=\"price\"]"));
    }
}