import {test,expect} from '@playwright/test';

let page;

test.beforeEach('Login', async({browser})=>{
    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
});

test.afterEach('Logout',async()=>{

    await page.getByRole('link',{name:'Log out'}).click();
    await page.waitForTimeout(2000);

});

test('Test Case 1 - Home Page', async()=>{

    const products = await page.locator('.hrefch');
    await expect(products).toHaveCount(9);

});

test('Test Case 2 - Add Products to Cart', async()=>{

    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    page.on('dialog', async(dialog)=>{
        await expect(dialog.message()).toEqual('Product added.')
        await dialog.accept();
    });
    await page.getByRole('link', { name: 'Add to cart' }).click();

});