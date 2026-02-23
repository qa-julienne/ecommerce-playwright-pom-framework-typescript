import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage'; 
import {LoginPage} from '../pages/LoginPage';
import {AccountPage} from '../pages/AccountPage'; 
import {CategoryPage} from '../pages/CategoryPage';
import {ProductPage} from '../pages/ProductPage'; 

{test('@regression TC05_AddToWishList', async ({page}) =>
{
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const account = new AccountPage(page);
    const category = new CategoryPage(page);
    const product = new ProductPage(page);

    await home.goto();
    await home.openMyAccount();
    await home.clickLogin();
    await login.login('testacct123@email.com', 'password123');
    await expect(account.myAccountHeading).toContainText("My Account");
    await home.openAllLaptopsAndNotebooks();
    await category.openProductByName('HP LP3065');//HP LP3065 is the parameter for productName
    await product.clickAddToWishList();
    await expect(product.successAlert).toContainText("Success");

    })
    };