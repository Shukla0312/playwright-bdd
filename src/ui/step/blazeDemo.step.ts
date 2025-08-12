import { expect } from '@playwright/test';
import { Given, When, Then } from '../../resources/config/fixture';
import { ConfigManager } from '../../resources/config/ConfigManager';
import { BlazeDemoHomePage } from '../page/blazeDemo/BlazeDemoHomePage';
import { BlazeDemoFlightsPage } from '../page/blazeDemo/BlazeDemoFlightsPage';
import { BlazeDemoPurchasePage } from '../page/blazeDemo/BlazeDemoPurchasePage';
import { BlazeDemoConfirmationPage } from '../page/blazeDemo/BlazeDemoConfirmationPage'

// Initialize page objects
let blazeHomePage: BlazeDemoHomePage;
let flightsPage: BlazeDemoFlightsPage;
let purchasePage: BlazeDemoPurchasePage;
let confirmationPage: BlazeDemoConfirmationPage;


Given('I visit BlazeDemo flight page', async ({ page }) => {
  blazeHomePage = new BlazeDemoHomePage(page);
  await blazeHomePage.goto(ConfigManager.BLAZEDEMO_URL);
});

When('I select departure city as {string}', async ({ }, city: string) => {
  await blazeHomePage.selectDeparture(city);
});

When('I select destination city as {string}', async ({ }, city: string) => {
  await blazeHomePage.selectDestination(city);
});

When('I click on Find Flights', async ({ }) => {
  await blazeHomePage.clickFindFlights();
});

When('I choose the flight with airline {string}', async ({ page }, airline: string) => {
  flightsPage = new BlazeDemoFlightsPage(page);
  await flightsPage.selectFlightByAirline(airline);
});

When('I fill in the passenger details:', async ({ page }, dataTable: { raw: () => string[][] }) => {
  purchasePage = new BlazeDemoPurchasePage(page);
  const data = Object.fromEntries(dataTable.raw());
  await purchasePage.fillForm(data);
});

When('I click on Purchase Flight', async ({ }) => {
  await purchasePage.clickPurchaseFlight();
});

Then('I should see the message {string}', async ({ page }, expectedMsg: string) => {
  confirmationPage = new BlazeDemoConfirmationPage(page);
  const actualMsg = await confirmationPage.getConfirmationMessage();
  expect(actualMsg).toContain(expectedMsg);
});
