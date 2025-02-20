import { AddNewUser } from "../../pages/AddNewUser";
const AddNewUserOBJ = new AddNewUser();
import LoginPageData from '../../fixtures/LoginPageData.json';

describe('Add New User', () => {
    before(() => {
        cy.login(LoginPageData.username, LoginPageData.password);
    });

    it('Add New User Flow', () => {
        AddNewUserOBJ.ClickAdminPage();
        AddNewUserOBJ.ClickAddButton();
        AddNewUserOBJ.SelectRoleAdmin();
        AddNewUserOBJ.SelectRoleStatus();
    });
});