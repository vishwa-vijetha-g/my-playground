import {test,expect} from '@playwright/test';

test('Handle Input Box',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const name = await page.locator('#name');
    expect(name).toBeVisible();
    expect(name).toBeEmpty();
    expect(name).toBeEditable();
    expect(name).toBeEnabled();
    name.fill('Vishwa');
    await page.waitForTimeout(1000);
});