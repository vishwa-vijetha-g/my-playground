import {test,expect} from '@playwright/test';

test('Handle Multi Select Dropdowns',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByLabel('Colors:').selectOption(['Blue','Red']);

    await expect(page.locator('#colors>option')).toHaveCount(5);
    await expect(await page.locator('#colors>option').count()).toBe(5);
    await expect((await page.$$('#colors>option')).length).toBe(5);
    await page.waitForTimeout(1000);

});