import {test,expect,chromium} from '@playwright/test';

test('Handle Windows/Pages',async()=>{
    test.slow();
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const allPages = await context.pages();
    console.log('Total Pages: ' + allPages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");
  
    await page2.goto("https://www.orangehrm.com/");
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM");
});

test.only('Handle Multiple Windows/Pages',async()=>{
    test.slow();
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page1).toHaveTitle("OrangeHRM");

    const pagePromise = await context.waitForEvent('page');
    await page1.getByRole('link', { name: 'OrangeHRM, Inc' }).click();

    const page2 = await pagePromise;
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM");

    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);
    

});