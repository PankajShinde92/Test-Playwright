import { Given, When, Then , setDefaultTimeout} from "@cucumber/cucumber";
import { chromium, Page, Browser, expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

import * as data from "../../helper/util/test-data/userDetails.json";
import { assert } from "console";



let browser : Browser;
let page : Page;
setDefaultTimeout(10 * 60 * 1000);

Given('User navigates to the application', async function () {
    
    await pageFixture.page.goto(process.env.BASEURL);
  });

Given('User click on the login link', async function () {
      // Write code here that turns the phrase above into concrete actions
      let login = "//span[text()='Login']"
      await pageFixture.page.locator(login).click();
    });
  
Given('User enter the username as {string}', async function (username) {
      // Write code here that turns the phrase above into concrete actions
      
      let email = "//input[@id='user-name']"
      await pageFixture.page.locator(email).fill(username);

    });
  
Given('User enter the password as {string}', async function (password) {
      // Write code here that turns the phrase above into concrete actions
      let pass = "//input[@id='password']"
      
      await pageFixture.page.locator(pass).fill(password)
    });
  
When('User click on the login button', async function () {
      // Write code here that turns the phrase above into concrete actions
      let button = "//input[@name='login-button']";

      await pageFixture.page.locator(button).click();
    });

Then('Login should be sucess with title as {string}', async function (app_title) {
        let text = "//div[@class='app_logo']"

        const name = await pageFixture.page.locator(text).textContent();   
        if(name.length>1)
        {
          await expect(name).toContain(app_title);
        }
        else {
          await console.log("Username and password are invalid");
        }
    });

Then('Login should fail', async function () {
   const failureMessage = pageFixture.page.locator("//h3[@data-test='error']");
   await expect(failureMessage).toBeVisible();
    });

Given('user add an item to the cart', async function () {
  let addItem = "//button[@id='add-to-cart-sauce-labs-backpack']";
  await pageFixture.page.locator(addItem).click();

});

Then('the cart should get updated', async function () {
  const cartCount = await pageFixture.page.locator("//span[@class='shopping_cart_badge']").textContent();
  expect(Number(cartCount?.length)).toBeGreaterThan(0); 
});

Then('do checkout process', async function () {
  let cartIcon = '//div[@id="shopping_cart_container"]';
  let checkoutButton = "//button[@id='checkout']";
  let firstName = "//input[@placeholder='First Name']";
  let lastName = "//input[@placeholder='Last Name']";
  let zipCode = "//input[@placeholder='Zip/Postal Code']";
  let continueButton = "//input[@id='continue']";
  let finishButton = "//button[@id='finish']";
  let successMessage = "//h2[@class='complete-header']";


  await pageFixture.page.locator(cartIcon).click();
  await pageFixture.page.locator(checkoutButton).click();
  await pageFixture.page.locator(firstName).fill(data.firstName);
  await pageFixture.page.locator(lastName).fill(data.firstName);
  await pageFixture.page.locator(zipCode).fill(data.zipCode);
  await pageFixture.page.locator(continueButton).click();
  await pageFixture.page.locator(finishButton).click(); 

  const sucessOrder = await pageFixture.page.locator(successMessage).textContent(); 
  assert(sucessOrder,"Thank you for your order!");
});



    
     
  
       
         