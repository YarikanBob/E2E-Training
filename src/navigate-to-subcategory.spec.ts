import {browser, by, ExpectedConditions} from "protractor";
import { MainPage } from "./page-object/main-page";
import {timeouts} from "./common/constants";

const mainPage = new MainPage();
describe('Navigate', () => {
    beforeAll(async() => {
        await browser.get('http://automationpractice.com/');
    });

    it('to Dresses subcategory from Women page', async () => {
        await mainPage.changeCategory('Women');
        await browser.wait(ExpectedConditions.visibilityOf(mainPage.searchCounter), timeouts.SHORT);
        await mainPage.changeSubcategory('Dresses');
        await browser.wait(ExpectedConditions.visibilityOf(mainPage.searchCounter), timeouts.SHORT);
        const resultArray = await mainPage.resultProductTitles.getText();
        for (let i = 0; i < resultArray.length; i++) {
            expect(resultArray[i]).toContain("Dress");
        }
    })

    it('to Tops subcategory from Women page', async () => {
        await mainPage.changeCategory('Women');
        await browser.wait(ExpectedConditions.visibilityOf(mainPage.searchCounter), timeouts.SHORT);
        await mainPage.changeSubcategory('Tops');
        await browser.wait(ExpectedConditions.visibilityOf(mainPage.searchCounter), timeouts.SHORT);
        const resultArray = await mainPage.resultProductTitles.getText();
        for (let i = 0; i < resultArray.length; i++) {
            expect(resultArray[i]).toMatch(/T-shirts|Blouse/);
        }
    })

})