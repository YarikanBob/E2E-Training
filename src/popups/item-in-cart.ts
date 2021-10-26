import {by, element} from "protractor";

export class ItemInCart {

    get itemTitle() {
        return element(by.xpath("//*[@id=\"layer_cart_product_title\"]"));
    }
    get itemQuantity() {
        return element(by.xpath("//*[@id=\"layer_cart_product_quantity\"]"));
    }
    get itemTotalPrice() {
        return element(by.xpath("//*[@id=\"layer_cart_product_price\"]"));
    }
    get itemPhoto() {
        return element(by.xpath("//*[@class=\"product-image-container layer_cart_img\"]"));
    }
    get itemContinueShoppingButton() {
        return element(by.xpath("//*[@class=\"continue btn btn-default button exclusive-medium\"]"));
    }
    get itemProceedToCheckoutButton() {
        return element(by.xpath("//*[@class=\"btn btn-default button button-medium\"]"));
    }
    get itemClosePopup() {
        return element(by.xpath("//*[@class=\"cross\"]"));
    }
}
