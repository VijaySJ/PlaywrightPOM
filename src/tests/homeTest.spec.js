import test from "../fixtures/fixture"

test('Home Page Test', async({loginPage, homePage})=>{
    await loginPage.openUrl();
    await loginPage.login("Admin", "admin123");
    await homePage.verifyDashboardText();
    await homePage.navigateToAdminModule();
})