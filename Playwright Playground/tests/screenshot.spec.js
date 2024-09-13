import {test,expect} from '@playwright/test';

test('page screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/', {waitUntil:'load'});
    await page.screenshot({path:'screenshots/' + 'HomePage' + Date.now() + '.png'});

})

test('full page screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/', {waitUntil:'load'});
    await page.screenshot({path:'screenshots/' + 'FullHomePage' + Date.now() + '.png', fullPage:true});

})

test('element screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/', {waitUntil:'load'});
    await page.locator('(//div[@class=\'product-thumb\'])[1]').screenshot({path:'screenshots/' + 'Element' + Date.now() + '.png'});

})