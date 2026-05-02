import { LoginPage } from '../page/login/loginPage';
import { Given, When, Then, Before } from '../../resources/config/fixture';
import { ConfigManager } from '../../resources/config/ConfigManager';

let loginPage: LoginPage;
let url = ConfigManager.ECOMMERCE_URL;
let username = ConfigManager.ECOMMERCE_USERNAME;
let password = ConfigManager.ECOMMERCE_PASSWORD;

Before(async ({ page }) => {
  loginPage = new LoginPage(page);
});

Given('I visit the eCommerce website', async () => {
  console.log('STEP: Navigate to ecommerce website');
  await loginPage.goto(url);
});

When('I login with username {string} and password {string}', async (_, username: string, password: string) => {
  console.log(`STEP: Logging in with username "${username}"`);
  await loginPage.login(username, password);
});

When('I login with valid credentials', async () => {
  console.log('STEP: Logging in with valid configured credentials');
  await loginPage.login(username, password);
});

When('I enter valid username and password on Ecommerce login Page', async () => {
  console.log('STEP: Entering valid credentials on login page');
  await loginPage.login(username, password);
});

When('I enter invalid username and password on Ecommerce login Page', async () => {
  console.log('STEP: Entering invalid credentials on login page');
  await loginPage.login('invalidemail@gmail.com', 'invalidPass');
});

When('I click on the login button without entering credentials', async () => {
  console.log('STEP: Clicking the login button without credentials');
  await loginPage.clickLoginButton();
});

Then('I should see an error message', async () => {
  console.log('STEP: Verifying invalid login error message');
  await loginPage.verifyIncorrectPasswordErrorMessage();
});

Then('I should see a login error message', async () => {
  console.log('STEP: Verifying invalid login error message');
  await loginPage.verifyIncorrectPasswordErrorMessage();
});

Then('I should see a mandatory field error message', async () => {
  console.log('STEP: Verifying mandatory field validation');
  await loginPage.verifyMandatoryFieldError();
});

Then('I should be logged in successfully', async () => {
  console.log('STEP: Verifying successful login');
  await loginPage.isLoggedIn();
});

When('I click on the logout button', async () => {
  console.log('STEP: Clicking logout');
  await loginPage.logout();
});

Then('I should be logged out successfully', async () => {
  console.log('STEP: Verifying successful logout');
  await loginPage.isLoggedOut();
});