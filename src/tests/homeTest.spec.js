import test from "../fixtures/fixture"
import {expect} from "@playwright/test"

test('Home Page Test', async({loginPage, homePage})=>{
    await loginPage.openUrl();
    await loginPage.login("Admin", "admin123");
    await homePage.verifyDashboardText("Dashboard");
    await homePage.navigateToModule("Admin","Admin");
})

// test('Side Menu Navigation Test', async({homePage})=>{
//     await homePage.navigateToModule("Admin");
//     await expect(page.locator("//h5[text()='System Users']")).toHaveText("System Users");
// })

