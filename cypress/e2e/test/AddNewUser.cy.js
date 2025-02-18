import { AddNewUser } from "../../pages/AddNewUser";
const AddNewUserOBJ = new AddNewUser();

describe ('Add New User'), () => {

    it ('Add New User Flow',() => {
        AddNewUserOBJ.ClickAdminPage();
        AddNewUserOBJ.ClickAddButton();
        AddNewUserOBJ.SelectRoleAdmin();
        AddNewUserOBJ.SelectRoleStatus();
    })
}