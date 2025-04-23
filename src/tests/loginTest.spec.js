import test from "../fixtures/fixture"

test('login the web app', async({loginPage})=>{
    await loginPage.openUrl();
    await loginPage.login("Admin", "admin123");
})