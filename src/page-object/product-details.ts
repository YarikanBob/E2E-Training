import {by, element} from "protractor";

export class ProductDetails {

    get addToCartButton() {
        return element(by.xpath("//*[@id=\"add_to_cart\"]"));
    }
}