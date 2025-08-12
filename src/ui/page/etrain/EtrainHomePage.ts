import { Page, expect } from '@playwright/test';

export class EtrainHomePage {
  private page: Page;

  private selectors = {
    sourceInput: '[name="station1"]',
    destinationInput: '[name="station2"]',
    searchButton: '.icon-search',

  };

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async enterSourceStation(source: string) {
    await this.page.fill(this.selectors.sourceInput, source);
    await this.page.keyboard.press('Enter');
  }

  async enterDestinationStation(destination: string) {
    await this.page.fill(this.selectors.destinationInput, destination);
    await this.page.keyboard.press('Enter');
  }

  async clickSearchButton() {
    await this.page.click(this.selectors.searchButton);
    // await this.page.waitForSelector('#myTable', { state: 'visible' });
    // const rowCount = await this.page.locator('#myTable tr').count();
    // await expect(rowCount).toBe(8);
  }

  async verifyTrainListLoaded(source: string, destination: string) {
    
  }

  async clickFirstTrainNumber() {
   
  }

  async verifyOnSchedulePage() {
  
  }

  async verifyTrainDetailsVisible() {

  }
}