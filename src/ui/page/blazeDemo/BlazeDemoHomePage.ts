import { BasePage } from '../BasePage';

export class BlazeDemoHomePage extends BasePage {
  async selectDeparture(city: string) {
    await this.page.selectOption('[name="fromPort"]', city);
  }

  async selectDestination(city: string) {
    await this.page.selectOption('[name="toPort"]', city);
  }

  async clickFindFlights() {
    await this.page.click('[value="Find Flights"]');
  }
}
