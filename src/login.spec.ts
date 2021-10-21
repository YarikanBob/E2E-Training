import { browser } from "protractor";
import { AccountDetailsPage } from "./page-object/account-details-page";
import { MainPage } from "./page-object/main-page";

const mainPage = new MainPage();
const accountDetailsPage = new AccountDetailsPage();
xdescribe('Login', () => {
    beforeAll(async() => {
        await browser.get('http://automationpractice.com/');
    });

    // describe == test suite
    // it == test case
    
    it('with wrong credentials should throw an Authentication error', async () => {
        await mainPage.signInButton.click();
        await accountDetailsPage.emailAddressInput.sendKeys('katya.pereverzeva2109@gmail.com');
        await accountDetailsPage.passwordInput.sendKeys('blabla');
        await accountDetailsPage.signInButton.click();
        const actualError = await accountDetailsPage.getErrorMessage();
        expect(actualError).toEqual('Authentication failed.', `Error is wrong. Expected error: Authentication failed. Actual error: ${actualError}`);
    })

})
