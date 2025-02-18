import {LoginPage} from '../../pages/LoginPage';
const LoginPageOBJ = new LoginPage();
import LoginPageData from '../../fixtures/LoginPageData.json';

describe ('Login Page', () => {

    it ('Login Flow',() => {
        LoginPageOBJ.OpenURL();
        LoginPageOBJ.EnterUserName(LoginPageData.username);
        LoginPageOBJ.EnterPassword(LoginPageData.password);
        LoginPageOBJ.ClickLoginButton();
    })
})