import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';



test('Login_Test_Demo', async ({ page }) => {

   const login = new LoginPage(page)

    await  login.navigateToSauceDemoSite()
    await  login.loginPage('standard_user','secret_sauce')

//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="username"]').press('Tab');
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.getByRole('link', { name: 'Logout' }).click();

});