const {test,expect} = require("@playwright/test");

test.only("Popup validation",async({page}) =>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://www.google.com/");
    // await page.goBack();
    // await page.goForward();

    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect (page.locator("#displayed-text")).toBeHidden();

    await page.on('dialog', dialog => dialog.accept());
    await page.locator("#confirmbtn").click();

    //mouse hover
    await page.locator("#mousehover").hover();

    //Handle Iframe
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();


});