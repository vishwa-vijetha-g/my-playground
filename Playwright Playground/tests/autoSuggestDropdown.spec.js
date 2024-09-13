import {test,expect} from '@playwright/test';

test('Handle Auto Suggest Dropdowns',async ({page})=>{
    await page.goto('https://redbus.in');

    await page.getByLabel('From').fill('Delhi');
    await page.waitForSelector('//li[@class=\'sc-iwsKbI jTMXri\']/div/text[1]');
    const options = await page.locator('//li[@class=\'sc-iwsKbI jTMXri\']/div/text[1]');
    for(let i=0;i<await options.count();i++){
        const option = await options.nth(i);
        const value = await option.textContent();
        // console.log(value);
        if(value === 'India Gate'){
            await option.click();
        }
    }
    await page.waitForTimeout(1000);

});