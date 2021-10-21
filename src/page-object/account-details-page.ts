import { by, element } from "protractor";

export class AccountDetailsPage {
    get emailAddressInput() {
        return element(by.css('form#login_form input#email'));
    }

    get passwordInput() {
        return element(by.css('form#login_form input#passwd'));
    }

    get signInButton() {
        return element(by.css('form#login_form button#SubmitLogin'));
    }
    
    async getErrorMessage() {
        return await element(by.css('div.alert ol')).getText();
    }

    get emailAddressRegisterInput() {
    return element(by.xpath("//*[@id=\"email_create\"]"));
    }

    get submitButton() {
        return element(by.xpath("//*[@id=\"SubmitCreate\"]"));
    }
}