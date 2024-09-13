import {test,expect} from '@playwright/test';

test('Handle Tables',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');
    const columns = await table.locator('thead th');
    const rows = await table.locator('tbody tr');
    console.log('Columns: ' + await columns.count());
    console.log('Rows: ' + await rows.count());

    await expect(columns).toHaveCount(4);
    await expect(rows).toHaveCount(5);

    await selectProducts(page,rows,'Product 1');
    await selectProducts(page,rows,'Product 3');

    const pages = await page.locator('ul#pagination a');
    for(let i=0;i< await pages.count();i++){
        await pages.nth(i).click();
        await page.waitForTimeout(1000);
        for(let i=0;i< await rows.count();i++){
            const row = rows.nth(i);
            for(let j=1; j < await columns.count(); j++){
                const cell = await row.locator(`td:nth-child(${j})`);
                console.log(await cell.textContent());
            }
        }
    }

    await page.waitForTimeout(3000);
});

async function selectProducts(page, rows, name){
    const matchedRow = await rows.filter({has: page.locator('td'), hasText: name});
    await matchedRow.locator('input').check();
}