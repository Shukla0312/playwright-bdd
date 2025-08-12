import { EtrainHomePage } from '../page/etrain/EtrainHomePage';
import { Given, When, Then } from '../../resources/config/fixture';
import { ConfigManager } from '../../resources/config/ConfigManager';

let url = ConfigManager.ETRAIN_URL;
let etrainHome: EtrainHomePage;

Given('I open the eTrain homepage', async ({ page }) => {
  etrainHome = new EtrainHomePage(page);
  await etrainHome.goto(url);
});

When('I enter {string} as the source station', async ({ }, source: string) => {
  await etrainHome.enterSourceStation(source);
});

When('I enter {string} as the destination station', async ({ }, destination: string) => {
  await etrainHome.enterDestinationStation(destination);
});

When('I click on the search button', async () => {
  await etrainHome.clickSearchButton();
});

Then('I should see a list of trains running between {string} and {string}', async ({ }, source: string, destination: string) => {
  await etrainHome.verifyTrainListLoaded(source, destination);
});

When('I click on the train number of the first listed train', async () => {
  await etrainHome.clickFirstTrainNumber();
});

Then('I should be navigated to the train schedule page', async () => {
  await etrainHome.verifyOnSchedulePage();
});

Then('I should see the train route, days of run, and class availability', async () => {
  await etrainHome.verifyTrainDetailsVisible();
});