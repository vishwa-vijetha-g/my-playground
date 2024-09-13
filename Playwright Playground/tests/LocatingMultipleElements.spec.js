import {test,expect} from '@playwright/test';

test('Locating Multiple Elements', async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    /*
    await page.getByRole('link',{name:'Log in'}).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button',{name : 'Log in'}).click();
    */
    const links = page.getByRole('link'); //links is an object, not an array.
    const linkCount = await links.count();
    for (let i = 0; i < linkCount; i++) {
        const link = links.nth(i);
        const linkText = await link.textContent();
        const linkHref = await link.getAttribute('href');
        console.log(`Link ${i + 1}: Text = ${linkText}, Href = ${linkHref}`);
    }
    expect(linkCount).toBe(11);

    await page.waitForSelector('a.hrefch');
    const products = await page.$$('a.hrefch'); //products is an array
    let i=0;
    for(let product of products) {
        const productText = await product.textContent();
        const productHref = await product.getAttribute('href');
        console.log(`Link ${i + 1}: Text = ${productText}, Href = ${productHref}`);
        i++;
    }
    expect(products.length).toBe(9);

});