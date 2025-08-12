import { BasePage } from '../BasePage';

export class BlazeDemoFlightsPage extends BasePage {
  async selectFlightByAirline(airline: string) {
    await this.page.locator('tr').filter({ hasText: airline }).locator('[value="Choose This Flight"]').click();
  }
}
