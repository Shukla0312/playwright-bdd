import { expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class LoginPage extends BasePage {
    private selectors = {
        usernameInput: '#userEmail',
        passwordInput: '#userPassword',
        loginButton: '#login',
        errorMessage: "[aria-Label='Incorrect email or password.']"
    };

    async navigateToLoginPage(url: string) {
        await this.page.goto(url);
    }

    async login(username: string, password: string) {
        await this.page.fill(this.selectors.usernameInput, username);
        await this.page.fill(this.selectors.passwordInput, password);
        await this.clickLoginButton();
    }

    async clickLoginButton() {
        await this.page.click(this.selectors.loginButton);
        await this.page.waitForLoadState('networkidle');
    }

    async verifyMandatoryFieldError() {
        let isVisible = await this.page.getByText('*Email is required').isVisible();
        expect(isVisible).toBe(true);
        isVisible = await this.page.getByText('*Password is required').isVisible();
        expect(isVisible).toBe(true);
    }

    async isLoggedOut() {
        let isVisible = await this.page.locator(this.selectors.loginButton).isVisible();
        expect(isVisible).toBe(true);
    }

    async isLoggedIn() {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForSelector('.fa-sign-out'); // Wait for the URL to contain '/dashboard'
        let currentURL = await this.page.url();
        await expect(currentURL).toContain('/dashboard');
    }

    async verifyIncorrectPasswordErrorMessage() {
        const errorMessage = await this.page.locator('[role="alert"]').filter({ hasText: 'Incorrect email or password.' });
        await expect(errorMessage).toBeVisible();
    }

    async logout() {
        await this.page.getByRole('button', { name: 'Sign Out' }).click();
        await this.page.waitForLoadState('networkidle');
    }
}
