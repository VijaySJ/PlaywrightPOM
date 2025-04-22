class LoginPage{

    constructor(page){
        this.page = page;
        this.usernameSelector = page.locator("[name='username']");
        this.passwordSelector = page.locator("[name='password']");
        this.loginButtonSelector = page.locator("//button[text()=' Login ']");
    }
    async openUrl(){
        await this.page.goto('/');
    }
    async login(username, password){
        await this.usernameSelector.fill(username);
        await this.passwordSelector.fill(password);
        await this.loginButtonSelector.click()
    }
}
export default LoginPage