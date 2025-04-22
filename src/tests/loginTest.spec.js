import{test} from "@playwright/test"
import LoginPage from '../pages/LoginPage';

test('login the web app', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();
    await loginPage.login("Admin", "admin123");
})