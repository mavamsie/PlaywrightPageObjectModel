
exports.LoginPage = class LoginPage {

      constructor(page) {

        this.page = page
        this.username_textbox = page.locator('[data-test="username"]')
        this.password_textbox = page.locator('[data-test="password"]')
        this.login_button = page.locator('[data-test="login-button"]')
        this.logout_button = page.getByRole('link', { name: 'Logout' })
    }

    async navigateToSauceDemoSite() {

         await this.page.goto('https://www.saucedemo.com/')

       // await this.page.goto('https://www.google.com/')
        
    }

    async loginPage(username, password) {

        await this.username_textbox.fill('username')
        await this.password_textbox.fill('password')
        await this.login_button.click()
        // await this.logout_button.click();
    }

}
