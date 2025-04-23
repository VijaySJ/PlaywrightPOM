import {expect} from "@playwright/test"

class HomePage{

    constructor(page){
        this.page = page;
        this.dashboardText = page.locator("//h6[text()='Dashboard']");
        this.sideMenuSearchBar = page.locator("input[placeholder='Search']");
        this.adminModule = page.locator("//span[text()='Admin']");
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
    async verifyDashboardText(){
        await expect(this.dashboardText).toHaveText("Dashboard");
    }
    async navigateToAdminModule(){
        await this.adminModule.click();
    }
    async navigateToPIMModule(){
        await this.pimModule.click();
    }
    async navigateToLeaveModule(){
        await this.leaveModule.click();
    }
    async navigateToTimeModule(){
        await this.timeModule.click();
    }
    async navigateToRecruitmentModule(){
        await this.recruitmentModule.click();
    }
    async navigateToMyInfoModule(){
        await this.myInfoModule.click();
    }
    async navigateToPerformanceModule(){
        await this.performanceModule.click();
    }
    async navigateToDashboardModule(){
        await this.dashboardModule.click();
    }
    async navigateToDirectoryModule(){
        await this.directoryModule.click();
    }
    async navigateToMaintenanceModule(){
        await this.maintenanceModule.click();
    }
    async navigateToClaimModule(){
        await this.claimModule.click();
    }
    async navigateToBuzzModule(){
        await this.buzzModule.click();
    }
}
export default HomePage