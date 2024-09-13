import {test,expect} from '@playwright/test';

test('Drag and Drop', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const madrid = await page.getByText('Madrid').nth(1);
    const spain = await page.getByText('Spain');
    /*
    await madrid.hover();
    await page.mouse.down();
    await spain.hover();
    await page.mouse.up();
    */

    await madrid.dragTo(spain);

    await expect(await page.getByText('SpainMadrid')).toBeVisible();

    await page.waitForTimeout(2000);

});