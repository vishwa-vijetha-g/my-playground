import {test,expect} from '@playwright/test';

test('Date Picker',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.locator('#datepicker').fill('05/25/2024');
    const year = '2024';
    const month = 'May';
    const day = '25';
    await page.locator('#datepicker').click();
    
    await page.waitForTimeout(5000);
});
