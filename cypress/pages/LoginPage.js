export class LoginPage {

    weblocators = {
        UserName: 'input[name="username"]',
        Password: 'input[name="password"]',
        LoginButton: 'button[type="submit"]',
    }

    OpenURL() {
        cy.visit(Cypress.env('URL'));
    }

    EnterUserName(username) {
        cy.get(this.weblocators.UserName).type(username);
    }

    EnterPassword(password) {
        cy.get(this.weblocators.Password).type(password);
    }

    ClickLoginButton() {
        cy.get(this.weblocators.LoginButton).click();
    }
}