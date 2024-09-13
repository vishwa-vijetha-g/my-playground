import {test,expect} from '@playwright/test';

test('Handle Hidden Options Dropdown',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{type : 'submit'}).click();

    await page.getByRole('link', { name: 'PIM' }).click();
    await page.locator('//label[text()=\'Job Title\']/parent::div/following-sibling::div/div/div').click();

    // Use SelectorHub Debugger to pause the screen and inspect the elements
    await page.waitForSelector('//div[@role=\'listbox\']//span');
    const options = await page.locator('//div[@role=\'listbox\']//span');

    for(let i=0;i<await options.count();i++){
        const option = await options.nth(i);
        if(await option.textContent() === 'Automation Tester'){
            await option.click();
        }
    }
    await page.waitForTimeout(1000);

});