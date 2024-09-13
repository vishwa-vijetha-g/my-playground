import {test,expect} from '@playwright/test';

test('Bootstrap Dropdown',async({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    await page.locator('//button[@data-toggle=\'dropdown\']').click();
    const options = await page.locator('ul.multiselect-container.dropdown-menu input');
    for(let i=0;i<await options.count();i++){
        const option = options.nth(i);
        const value = await option.getAttribute('value');
        if(await option.isChecked()){
            await option.uncheck();
        }
        if(value === 'Java'){
            await option.check();
        }
    }

    await expect(options).toHaveCount(11);

    await page.waitForTimeout(3000);

});