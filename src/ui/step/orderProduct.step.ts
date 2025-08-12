import { CartPage } from '../page/ecommerce/CartPage';
import { Given, When, Then } from '../../resources/config/fixture';
import { ProductListPage } from '../page/ecommerce/ProductListPage';

let productPage: ProductListPage;
let cartPage: CartPage;
When('I add a {string} to the cart', async ({ page }, productName: string) => {
    productPage = new ProductListPage(page);
    await productPage.addProductToCart(productName);
});

When('I view the cart', async ({}) => {
    await productPage.gotoCart();
});

Then('I should see {string} in the cart', async ( {}, productName: string) => {
    await productPage.verifyProductInCart(productName);
});

When('I proceed to checkout', async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.proceedToCheckout();
});

Then('I enter shipping details and confirm Order', async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.placeOrder();
});