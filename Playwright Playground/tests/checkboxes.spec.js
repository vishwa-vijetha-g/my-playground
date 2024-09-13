import {test,expect} from '@playwright/test';
import exp from 'constants';

test('Handle Radio Button',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const monday = await page.getByLabel('Monday');
    await monday.check();
    await expect(monday).toBeChecked();
    await expect(monday.isChecked()).toBeTruthy();
    await expect(page.getByLabel('Sunday')).not.toBeChecked();

    const days = [await page.getByLabel('Saturday'),await page.getByLabel('Sunday'),await page.getByLabel('Monday')];
    for(let day of days){
        await day.check();
    }
    for(let day of days){
        await expect(day).toBeChecked();
    }
    for(let day of days){
        if(await day.isChecked()){
            await day.uncheck();
        }
    }
    for(let day of days){
        await expect(day).not.toBeChecked();
    }

    await page.waitForTimeout(1000);
});