import {test,expect} from '@playwright/test';

test('Mouse Double Click',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const copy = await page.getByRole('button', { name: 'Copy Text' });

    await copy.dblclick();

    await expect(await page.locator('#field2').textContent()).toEqual(await page.locator('#field1').textContent());
    
    await page.waitForTimeout(2000);
});