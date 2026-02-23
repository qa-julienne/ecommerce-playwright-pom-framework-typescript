import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage'; 
import {CategoryPage} from '../pages/CategoryPage';
import {ProductPage} from '../pages/ProductPage'; 

{test('@sanity @regression TC03_AddToCart', async ({page}) => 
{
    const home = new HomePage(page);
    const category = new CategoryPage(page);
    const product = new ProductPage(page);

    await home.goto();
    await home.openAllLaptopsAndNotebooks();
    await category.openProductByName('HP LP3065');//HP LP3065 is the parameter for productName
    await product.setDeliveryDate();
    await product.clickAddToCart();
    await expect(product.successAlert).toContainText("Success");

})
    };