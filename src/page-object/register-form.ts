import {browser, by, element, protractor} from "protractor";

export class RegisterForm {
    get firstNamefieldPI() {
        return element(by.xpath("//*[@id=\"customer_firstname\"]"));
    }
    get lastNamefieldPI() {
        return element(by.xpath("//*[@id=\"customer_lastname\"]"));
    }
    get passwordfieldPI() {
        return element(by.xpath("//*[@id=\"passwd\"]"));
    }
    get firstNamefieldAdress() {
        return element(by.xpath("//*[@id=\"firstname\"]"));
    }
    get lastNamefieldAdress() {
        return element(by.xpath("//*[@id=\"lastname\"]"));
    }
    get adressfieldAdress() {
        return element(by.xpath("//*[@id=\"address1\"]"));
    }
    get cityfieldAdress() {
        return element(by.xpath("//*[@id=\"city\"]"));
    }
    get statefieldAdress() {
        return element(by.xpath("//*[@id=\"uniform-id_state\"]"));
    }
    get stateIndianaAdress() {
        return element(by.xpath("//select[contains(@id, 'id_state')]/option[@value=14]"));
    }
    get postalCodefieldAdress() {
        return element(by.xpath("//*[@id=\"postcode\"]"));
    }
    get countryfieldAdress() {
        return element(by.xpath("//*[@id=\"uniform-id_country\"]"));
    }
    get unidtedStatesAdress() {
        return element(by.xpath("//select[contains(@id, 'id_country')]/option[@value=21]"));
    }
    get mobilefieldAdress() {
        return element(by.xpath("//*[@id=\"phone_mobile\"]"));
    }
    get additionalEmailfieldAdress() {
        return element(by.xpath("//*[@id=\"alias\"]"));
    }
    get submitButton() {
        return element(by.xpath("//*[@id=\"submitAccount\"]"));
    }
}