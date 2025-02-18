export class AddNewUser {

    PageLocators = {
        AddButton: 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]',
        Role: 'div[class="oxd-select-text--after"]'
    }

    ClickAddButton() {
        cy.get(this.PageLocators.AddButton).click();
    }

    SelectRoleAdmin() {
        let AllElements = cy.get(this.PageLocators.Role);
        AllElements[0].click();
    }

    SelectRoleStatus() {
        let AllElements = cy.get(this.PageLocators.Role);
        AllElements[1].click();
    }
}