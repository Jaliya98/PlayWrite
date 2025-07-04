const { test , request, expect } = require("@playwright/test");
const LoginPayload = {userEmail: "sportchannel619@gmail.com", userPassword: "Abc@123456"}

test.beforeAll(async () => 
    {
        const apiContext = await request.newContext();
        const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: LoginPayload
            }
        )
        expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJason = await loginResponse.json();
        const token = loginResponseJason.token;
        console.log(token);
    });

test('web api test', async ({ page }) => 
    {
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