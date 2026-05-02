import { CartPage } from '../page/ecommerce/CartPage';
import { Given, When, Then } from '../../resources/config/fixture';
import { ProductListPage } from '../page/ecommerce/ProductListPage';

let productPage: ProductListPage;
let cartPage: CartPage;
When('I add a {string} to the cart', async ({ page }, productName: string) => {
    console.log(`STEP: Add product "${productName}" to the cart`);
    productPage = new ProductListPage(page);
    await productPage.addProductToCart(productName);
});

When('I view the cart', async () => {
    console.log('STEP: View cart contents');
    await productPage.gotoCart();
});

Then('I should see {string} in the cart', async ( {}, productName: string) => {
    console.log(`STEP: Verify that "${productName}" is present in the cart`);
    await productPage.verifyProductInCart(productName);
});

When('I proceed to checkout', async ({ page }) => {
    console.log('STEP: Proceed to checkout');
    cartPage = new CartPage(page);
    await cartPage.proceedToCheckout();
});

Then('I enter shipping details and confirm Order', async ({ page }) => {
    console.log('STEP: Enter shipping details and confirm order');
    cartPage = new CartPage(page);
    await cartPage.placeOrder();
});