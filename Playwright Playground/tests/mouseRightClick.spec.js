import {test,expect} from '@playwright/test';

test('Mouse Right Click / Context Click', async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const rightClick = await page.getByText('right click me', { exact: true });
    await rightClick.click({button:'right'});

    await page.waitForTimeout(2000);
});
