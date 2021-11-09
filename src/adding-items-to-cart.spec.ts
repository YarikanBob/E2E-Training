import {browser, ExpectedConditions} from "protractor";
import { MainPage } from "./page-object/main-page";
import {ItemInCartPopup} from "./popups/item-in-cart-popup";
import {ProductDetailsPage} from "./page-object/product-details-page";
import {CartPage} from "./page-object/cart-page";
import {timeouts} from "./common/constants";
import { WomenPage } from "./page-object/women-page";

const mainPage = new MainPage();
const itemInCartPopup = new ItemInCartPopup();
const productDetails = new ProductDetailsPage();
const cart = new CartPage();
let itemTitle = 'none';
let itemTotalPrice = 'none';
const womenPage = new WomenPage();
describe('Add', () => {
    beforeAll(async() => {
        await browser.get('http://automationpractice.com/');
    });

    // describe == test suite
    // it == test case

    it('items to cart', async () => {
        await mainPage.firstImage.click();
        itemTitle=await productDetails.itemTitle.getText();
        itemTotalPrice=await productDetails.itemPrice.getText();
        await productDetails.addToCartButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(itemInCartPopup.itemTitle), timeouts.EXTENDED);
        expect(await itemInCartPopup.itemTitle.getText()).toEqual(itemTitle);
        expect(await itemInCartPopup.itemQuantity.getText()).toEqual('1');
        expect(await itemInCartPopup.itemTotalPrice.getText()).toEqual(itemTotalPrice);
        expect(await itemInCartPopup.itemPhoto.isPresent()).toEqual(true);
        expect(await itemInCartPopup.itemContinueShoppingButton.isPresent()).toEqual(true);
        expect(await itemInCartPopup.itemProceedToCheckoutButton.isPresent()).toEqual(true);
        await itemInCartPopup.itemClosePopup.click();
        await mainPage.openCart.click();
        expect(await cart.numberOfItems).toEqual(1);
        expect(await cart.getItemTitle(0).getText()).toEqual(itemTitle);
    })

    it('large numbers of items to cart', async () => {
        await mainPage.changeCategory('Women');
        await browser.wait(ExpectedConditions.visibilityOf(mainPage.searchCounter), timeouts.SHORT);
        await womenPage.pageItem.click();
        await browser.wait(ExpectedConditions.visibilityOf(womenPage.quantityCounter), timeouts.SHORT);
        await womenPage.quantityCounter.clear();
        await womenPage.quantityCounter.sendKeys('#1000000000000000000');
        await womenPage.addToCartButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(womenPage.errorPopup), timeouts.STANDARD);
        const actualError = await womenPage.getErrorMessage();
        expect(actualError).toEqual('Null quantity.', `Error is wrong. Expected error: Please choose correct number of items. Actual error: ${actualError}`);
    })
})
