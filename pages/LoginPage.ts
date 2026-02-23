import type {Page, Locator } from '@playwright/test'//importing Page, Locator from playwright/test

export class LoginPage{
readonly page: Page;
readonly email: Locator;
readonly password: Locator;
readonly loginButton: Locator;



//constructor
constructor(page: Page) //pass the page
  {
    this.page = page;//initialize the constructor

//locators
this.email = page.getByRole('textbox', { name: 'E-Mail Address' });
this.password = page.getByRole('textbox', { name: 'Password' });
this.loginButton = page.getByRole('button', { name: 'Login' });
}

async login(username: string, password: string): Promise <void>//2 parameters coming from the test
// function doesn't return anything. have to return void
{
    await this.email.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
}

}
