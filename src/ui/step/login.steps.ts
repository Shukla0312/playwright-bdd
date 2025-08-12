import { LoginPage } from '../page/login/loginPage';
import { Given, When, Then } from '../../resources/config/fixture';
import { ConfigManager } from '../../resources/config/ConfigManager';

let loginPage: LoginPage;
let url = ConfigManager.ECOMMERCE_URL;
let username = ConfigManager.ECOMMERCE_USERNAME;
let password = ConfigManager.ECOMMERCE_PASSWORD;

Given('I visit the eCommerce website', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto(url);
});

Then('I should see an error message', async ({ }) => {
  await loginPage.verifyIncorrectPasswordErrorMessage();
});

When('I click on the login button without entering credentials', async ({ }) => {
  await loginPage.clickLoginButton();
});

Then('I should see a mandatory field error message', async ({ }) => {
  await loginPage.verifyMandatoryFieldError();
});

When('I enter valid username and password on Ecommerce login Page', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

When('I enter invalid username and password on Ecommerce login Page', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.login('invalidemail@gmail.com', 'invalidPass');
});

Then('I should be logged in successfully', async ({ }) => {
  await loginPage.isLoggedIn();
});

When('I click on the logout button', async ({ }) => {
  await loginPage.logout();
});

Then('I should be logged out successfully', async ({ }) => {
  await loginPage.isLoggedOut();
});