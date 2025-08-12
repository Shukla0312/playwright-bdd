import { Given, When, Then } from '../../resources/config/fixture';
import { ProductDetailsPage } from '../../api/page/productDetailsPage';
import { ProductListPage } from '../../ui/page/ecommerce/ProductListPage';

let productPage: ProductListPage;
let productDetailsPage: ProductDetailsPage;

When('I click on View {string}', async ({ page }, productName: string) => {
  productPage = new ProductListPage(page);
  await productPage.clickOnViewProduct(productName);
});

Then('I should mock the response for the product details and change the price to 100', async ({ page }) => {
  productDetailsPage = new ProductDetailsPage(page);
  await productDetailsPage.mockedZaraCoat();
});

Then('I should see the updated product details with the new price', async ({ page }) => {
  productDetailsPage = new ProductDetailsPage(page);
  await productDetailsPage.verifyProductMockData();
});
