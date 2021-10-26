import {browser, ExpectedConditions} from "protractor";
import { MainPage } from "./page-object/main-page";
import {ItemInCartPopup} from "./popups/item-in-cart-popup";
import {ProductDetails} from "./page-object/product-details";
import {Cart} from "./page-object/cart";

const mainPage = new MainPage();
const itemInCartPopup = new ItemInCartPopup();
const productDetails = new ProductDetails();
const cart = new Cart();
describe('Add', () => {
    beforeAll(async() => {
        await browser.get('http://automationpractice.com/');
    });

    // describe == test suite
    // it == test case

    it('items to cart', async () => {
        await mainPage.firstImage.click();
        await productDetails.addToCartButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(itemInCartPopup.itemTitle),15000);
        expect(await itemInCartPopup.itemTitle.getText()).toEqual('Faded Short Sleeve T-shirts');
        expect(await itemInCartPopup.itemQuantity.getText()).toEqual('1');
        expect(await itemInCartPopup.itemTotalPrice.getText()).toEqual('$16.51');
        expect(await itemInCartPopup.itemPhoto.isPresent()).toEqual(true);
        expect(await itemInCartPopup.itemContinueShoppingButton.isPresent()).toEqual(true);
        expect(await itemInCartPopup.itemProceedToCheckoutButton.isPresent()).toEqual(true);
        await itemInCartPopup.itemClosePopup.click();
        await mainPage.openCart.click();
        expect(await cart.numberOfItems).toEqual(1);
        expect(await cart.getItemTitle(0).getText()).toEqual('Faded Short Sleeve T-shirts');
    })
})
