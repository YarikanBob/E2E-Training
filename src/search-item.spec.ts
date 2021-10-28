import {browser, ExpectedConditions} from "protractor";
import { AccountDetailsPage } from "./page-object/account-details-page";
import { MainPage } from "./page-object/main-page";
import {timeouts} from "./common/constants";

const mainPage = new MainPage();
xdescribe('Search', () => {
    beforeAll(async() => {
        await browser.get('http://automationpractice.com/');
    });

    // describe == test suite
    // it == test case

    it('items with "Printed" word in it', async () => {
       await mainPage.searchForItem("Printed");
       await browser.wait(ExpectedConditions.visibilityOf(mainPage.searchCounter), timeouts.STANDARD);
       const resultArray = await mainPage.resultProductTitles.getText();
        for (let i = 0; i < resultArray.length; i++) {
            expect(resultArray[i]).toContain("Printed");
        }
    })

})

