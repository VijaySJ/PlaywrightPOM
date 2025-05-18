import test from "../fixtures/fixture";

test('Dashboard text should be visible', async ({ loginPage, homePage }) => {
    await loginPage.openUrl();
    await loginPage.login("Admin","admin123");
    await homePage.verifyDashboardText('Dashboard');
    const menuItems = [
    { module: 'Admin', header: 'Admin' },
    { module: 'PIM', header: 'PIM' },
    { module: 'Leave', header: 'Leave' },
    { module: 'Time', header: 'Time' },
    { module: 'Recruitment', header: 'Recruitment' },
    { module: 'My Info', header: 'Personal Details' },
    { module: 'Performance', header: 'Performance' },
    { module: 'Dashboard', header: 'Dashboard' },
    { module: 'Directory', header: 'Directory' },
    { module: 'Maintenance', header: 'Administrator Access' },
    { module: 'Buzz', header: 'Buzz' },
  ];
 for (const item of menuItems) {
    await homePage.navigateToModule(item.module, item.header);
    await homePage.page.waitForTimeout(500);
  } 
});
