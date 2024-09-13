import {test,expect} from '@playwright/test';

test('Mouse Hover', async({page})=>{
    await page.goto('https://demo.opencart.com');

    const desktops = await page.getByRole('link', { name: 'Desktops', exact: true });
    const mac = await page.getByRole('link', { name: 'Mac (1)' });

    await desktops.hover();
    await mac.hover();

    await page.waitForTimeout(2000);
});