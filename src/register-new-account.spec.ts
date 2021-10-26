import {browser, ExpectedConditions} from "protractor";
import { AccountDetailsPage } from "./page-object/account-details-page";
import { MainPage } from "./page-object/main-page";
import {RegisterForm} from "./page-object/register-form";
import {MyAccount} from "./page-object/my-account";

const mainPage = new MainPage();
const accountDetailsPage = new AccountDetailsPage();
const registerForm = new RegisterForm();
const myAccount = new MyAccount();
xdescribe('Create', () => {
    beforeAll(async() => {
        await browser.get('http://automationpractice.com/');
    });

    // describe == test suite
    // it == test case

    it('new account', async () => {
        await mainPage.signInButton.click();
        await accountDetailsPage.emailAddressRegisterInput.sendKeys('yaroslav.golik@gmail6.com');
        await accountDetailsPage.submitButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(registerForm.firstNamefieldPI),10000);
        await registerForm.firstNamefieldPI.sendKeys("Yaroslav");
        await registerForm.lastNamefieldPI.sendKeys("Holik");
        await registerForm.passwordfieldPI.sendKeys("HeyBro123");
        await registerForm.firstNamefieldAdress.sendKeys("Yaroslav");
        await registerForm.lastNamefieldAdress.sendKeys("Holik");
        await registerForm.adressfieldAdress.sendKeys("Naukova street, building 54/28");
        await registerForm.cityfieldAdress.sendKeys("Lviv");
        await registerForm.statefieldAdress.click();
        await registerForm.stateIndianaAdress.click();
        await registerForm.postalCodefieldAdress.sendKeys("79012");
        await registerForm.countryfieldAdress.click();
        await registerForm.unidtedStatesAdress.click();
        await registerForm.mobilefieldAdress.sendKeys("+3809512322457");
        await registerForm.additionalEmailfieldAdress.clear();
        await registerForm.additionalEmailfieldAdress.sendKeys("yaroslav.golik6@gmail.com");
        await registerForm.submitButton.click();
        expect(await myAccount.getcurrentUserName()).toEqual("Yaroslav Holik");
    })
})
