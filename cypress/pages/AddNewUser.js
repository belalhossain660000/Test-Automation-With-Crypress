export class AddNewUser {

    PageLocators = {
        AdminPageXpath: '//span[text()="Admin"]',
        AddButton: 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]',
        Role: 'div[class="oxd-select-text--after"]',
        AdminXpath: '//div[text()="Admin"]',
        StatusXpath: '//div[text()="Enabled"]'
    }

    ClickAdminPage() {
        cy.xpath(this.PageLocators.AdminPageXpath).click();
    }

    ClickAddButton() {
        cy.get(this.PageLocators.AddButton).click();
    }

    SelectRoleAdmin() {
        let AllElements = cy.get(this.PageLocators.Role);
        AllElements[0].click();
        cy.xpath(this.PageLocators.AdminXpath).click();
    }

    SelectRoleStatus() {
        let AllElements = cy.get(this.PageLocators.Role);
        AllElements[1].click();
        cy.xpath(this.PageLocators.StatusXpath).click();
    }
}