import {test,expect} from '@playwright/test';

test('Handle Radio Button',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const maleRadioButton = await page.getByLabel('Male', { exact: true });
    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();
    await expect(maleRadioButton).toBeTruthy();

    const femaleRadioButton = await page.getByLabel('Female');
    await expect(femaleRadioButton).not.toBeChecked();

    await page.waitForTimeout(1000);
});