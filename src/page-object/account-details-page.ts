import { by, element } from "protractor";
import {Page} from "./page";

export class AccountDetailsPage extends Page{
    get emailAddressInput() {
        return element(by.css('form#login_form input#email'));
    }
    get passwordInput() {
        return element(by.css('form#login_form input#passwd'));
    }
    get signInButton() {
        return element(by.css('form#login_form button#SubmitLogin'));
    }   
    get emailAddressRegisterInput() {
        return element(by.xpath("//*[@id=\"email_create\"]"));
    }
    get submitButton() {
        return element(by.xpath("//*[@id=\"SubmitCreate\"]"));
    }
}