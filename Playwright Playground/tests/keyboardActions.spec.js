import {test,expect} from '@playwright/test';

test('Keyboard Actions', async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');

    const left = await page.getByPlaceholder('Paste one version of the text here.');
    const right = await page.getByPlaceholder('Paste another version of the text here.');

    await left.fill('Hello World!');
    await left.press('Control+KeyA');
    await left.press('Control+KeyC');

    /*
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+KeyV');
    */

    await right.press('Control+KeyV');

    await expect(await right.textContent()).toEqual(await left.textContent());
    
    await page.waitForTimeout(2000);

});