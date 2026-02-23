import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage'; 
import {LoginPage} from '../pages/LoginPage';
import {AccountPage} from '../pages/AccountPage'; 

import testData from '../utils/CloudBerryStoreTestData.json'; //importing the dataset JSON File from this location
type UserRow = {username: string; password: string;}
const users = (testData.Sheet1 ?? []) as UserRow[]; // variable is users. 
//Take Sheet1 from testData. If it doesn't exist, use an empty array. Then treat the result as an array of UserRow objects.

for(const data of users)
{test(`@sanity @datadriven @regression TC02_Login-${data.username}`, async ({page}) => //each test run
{
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const account = new AccountPage(page);

    await home.goto();
    await home.openMyAccount();
    await home.clickLogin();
    await login.login(data.username, data.password);//dynamic data driven test

    //await expect(account.myAccountHeading).toContainText("My Account");//assertion that validates the Header Text
    await expect(account.myAccountHeading).toBeVisible(); //assertion that validates the Header is visible
})
};