import {expect} from "@playwright/test"

class HomePage{

    constructor(page){
        this.page = page;
        this.dashboardText = page.locator("//h6[text()='Dashboard']");
        this.sideMenuSearchBar = page.locator("input[placeholder='Search']");
        this.adminModule = page.locator("//nav//span[normalize-space()='Admin']");
        this.pimModule = page.locator("//span[text()='PIM']");
        this.leaveModule = page.locator("//span[text()='Leave']");
        this.timeModule = page.locator("//span[text()='Time']");
        this.recruitmentModule = page.locator("//span[text()='Recruitment']");
        this.myInfoModule = page.locator("//span[text()='My Info']");
        this.performanceModule = page.locator("//span[text()='Performance']");
        this.dashboardModule = page.locator("//span[text()='Dashboard']");
        this.directoryModule = page.locator("//span[text()='Directory']");
        this.maintenanceModule = page.locator("//span[text()='Maintenance']");
        this.claimModule = page.locator("//span[text()='Claim']");
        this.buzzModule = page.locator("//span[text()='Buzz']");
    }
    async verifyDashboardText(dashboardHeader){
        await expect(this.dashboardText).toHaveText(dashboardHeader);
    };
    async navigateToModule(moduleName,headerName) {
        const moduleLocator = this.page.locator(`//nav//span[normalize-space()='${moduleName}']`);
        await moduleLocator.waitFor({ state: 'visible' });
        await moduleLocator.click();
        const assertHeader = this.page.locator(`//h6[text()='${headerName}']`);
        await expect(assertHeader).toHaveText(headerName);
}

}
export default HomePage