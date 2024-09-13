import {test,expect} from '@playwright/test';

test.skip('Alerts with OK',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async (dialog)=>{
        await expect(dialog.type()).toBe('alert');
        await expect(dialog.message()).toEqual('I am an alert box!')
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Alert' }).click();
    await page.waitForTimeout(1000);

});

test.skip('Confirm Alerts - Alerts with Ok and Cancel', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async(dialog)=>{
        await expect(dialog.type()).toBe('confirm');
        await expect(dialog.message()).toEqual('Press a button!');
        await page.waitForTimeout(1000);
        await dialog.dismiss();

    });
    await page.getByRole('button', { name: 'Confirm Box' }).click();
    await expect(await page.locator('p#demo').textContent()).toEqual('You pressed Cancel!');
    await page.waitForTimeout(1000);

});

test('Prompt Alerts - Alerts with text,ok and cancel', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async(dialog)=>{
        await expect(dialog.type()).toBe('prompt');
        await expect(dialog.message()).toEqual('Please enter your name:');
        await expect(dialog.defaultValue()).toEqual('Harry Potter');
        await dialog.accept('Vishwa Vijetha');
    });
    await page.getByRole('button', { name: 'Prompt' }).click();
    await expect(await page.locator('p#demo').textContent()).toEqual('Hello Vishwa Vijetha! How are you today?');
    await page.waitForTimeout(1000);
});
