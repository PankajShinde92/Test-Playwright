import { BeforeAll, AfterAll, After, Before, Status } from "@cucumber/cucumber";
import { chromium, Browser , Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";

let browser:Browser;
let context:BrowserContext;

BeforeAll(async function() {
    getEnv();
    browser = await invokeBrowser();
});

Before(async function(){
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;

});

After(async function({pickle,result}){
    //screenshot code

if (result?.status == Status.FAILED){
    const img = await pageFixture.page.screenshot({path: `./test-result/screenshots/${pickle.name}` , type:"png"})
    await this.attach(img, "image/png")
}
    await pageFixture.page.close();
    await context.close();

});

AfterAll(async function(){
    await browser.close();
});