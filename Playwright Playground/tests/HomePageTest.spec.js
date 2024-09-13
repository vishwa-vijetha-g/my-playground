import {test,expect} from '@playwright/test';

test('Home Page Test',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    let title = await page.title();
    console.log('Page Title: ' + title);
    let url = await page.url();
    console.log('Page URL: ' + url);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
    await page.close();
});