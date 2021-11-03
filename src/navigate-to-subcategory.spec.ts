import {browser, by, ExpectedConditions} from "protractor";
import { MainPage } from "./page-object/main-page";

const mainPage = new MainPage();
describe('Navigate', () => {
    beforeAll(async() => {
        await browser.get('http://automationpractice.com/');
    });

    it('to Dresses subcategory from Women page', async () => {
        await mainPage.changeCategory('Women');
        await browser.wait(ExpectedConditions.visibilityOf(mainPage.searchCounter), 5000); //I wanted to find some unique element after the previous step, but the site is stupid))
        await mainPage.changeSubcategory('Dresses');
        await browser.wait(ExpectedConditions.visibilityOf(mainPage.searchCounter), 5000);
        const resultArray = await mainPage.resultProductTitles.getText();
        for (let i = 0; i < resultArray.length; i++) {
            expect(resultArray[i]).toContain("Dress");
        }
    })

    it('to Tops subcategory from Women page', async () => {
        await mainPage.changeCategory('Women');
        await browser.wait(ExpectedConditions.visibilityOf(mainPage.searchCounter), 5000); //I wanted to find some unique element after the previous step, but the site is stupid))
        await mainPage.changeSubcategory('Tops');
        await browser.wait(ExpectedConditions.visibilityOf(mainPage.searchCounter), 5000);
        const resultArray = await mainPage.resultProductTitles.getText();
        for (let i = 0; i < resultArray.length; i++) {
            expect(resultArray[i]).toContain("T-shirts"); //how to verify in such case if category contains different types?
        }
    })

})