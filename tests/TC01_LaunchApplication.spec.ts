import {test, expect} from '@playwright/test';//importing the required libraries for playwright
import {HomePage} from '../pages/HomePage';//importing HomePage. Variable is HomePage 

test('@sanity @regression TC01_LaunchApplication', async ({ page }) => //page is like a driver
  {
  const home = new HomePage(page);//creating an object from HomePage to use elements. Variable is home
  await home.goto();
  await expect(page).toHaveTitle('Your store of fun');
  });
