import { expect } from '@playwright/test';
import { BasePage } from '../../ui/page/BasePage'
import { mockedZaraCoat3 } from '../../resources/fixture/mockProductResponse';

export class ProductDetailsPage extends BasePage {

    async mockedZaraCoat() {
        await this.page.route('**/get-product-detail/67a8dde5c0d3e6622a297cc8', async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(mockedZaraCoat3)
            });
        });
        await this.page.reload();
    }

    async verifyProductMockData() {
        const productName = await this.page.getByText("Mocked Zara Coat 3");
        const productPrice = await this.page.getByText("$ 99.99");
        const productDescription = await this.page.getByText("Mocked Adidas Originals");
        expect(productName).toBeVisible();
        expect(productPrice).toBeVisible();
        expect(productDescription).toBeVisible();
    }
}