import {test,expect} from '@playwright/test';

test('Handle Dropdowns',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.getByLabel('Country:').selectOption({label:'India'});
    //await page.getByLabel('Country:').selectOption({value:'india'});
    //await page.getByLabel('Country:').selectOption({index: 0});
    await page.getByLabel('Country:').selectOption('India'); //visible text

    const options = await page.locator('#country>option');
    await expect(options).toHaveCount(10);

    const optionsArray = await page.$$('#country>option');
    let optionFound = false;
    console.log('Total Options: ' + optionsArray.length);
    for(let option of optionsArray){
        const optionValue = await option.textContent();
        console.log(optionValue);
        if(optionValue === 'India'){
            optionFound = true;
        }
    }
    await expect(optionsArray.length).toBe(10);
    await expect(optionFound).toBeTruthy();


    await page.waitForTimeout(1000);

});