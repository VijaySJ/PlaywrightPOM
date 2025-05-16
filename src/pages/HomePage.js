import {expect} from "@playwright/test"

class HomePage{

    constructor(page){
        this.page = page;
        this.dashboardText = page.locator("//h6[text()='Dashboard']");
        this.sideMenuSearchBar = page.locator("input[placeholder='Search']");
        this.adminModule = page.locator("//nav//span[normalize-space()='Admin']");
    }
    async verifyDashboardText(dashboardHeader){
        await expect(this.dashboardText).toHaveText(dashboardHeader);
    };
    async navigateToModule(moduleName, headerName) {
    // Locate the side menu item
    const moduleLocator = this.page.locator(`//nav//span[normalize-space()='${moduleName}']`);
    await moduleLocator.waitFor({ state: 'visible' });
    await moduleLocator.click();

      // Special case for Maintenance: handle auth dialog cancel
  if (moduleName === 'Maintenance') {
    const cancelButton = this.page.locator("//button[normalize-space()='Cancel']");
    if (await cancelButton.isVisible({ timeout: 3000 })) {
      await cancelButton.click();
    }
  }

    // Locate the header and assert
    const headerLocator = this.page.locator(`//h6[normalize-space()='${headerName}']`);
    await expect(headerLocator).toBeVisible();
    await expect(headerLocator).toHaveText(headerName);
}
}
export default HomePage