import {test,expect} from '@playwright/test';

test('Single Files',async ({page})=>{
    await page.goto('https://practice.expandtesting.com/upload');

    await page.getByTestId('file-input').setInputFiles('fileUploads/Dialogs-Playwright.png');
    
    await page.getByTestId('file-submit').click();

    await expect(await page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();

    await page.waitForTimeout(3000);
});

test.only('Multiple Files', async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    const fileUploader = await page.locator('#filesToUpload');

    await fileUploader.setInputFiles(['fileUploads/Assertions-Playwright.png','fileUploads/Dialogs-Playwright.png']);

    await expect(await page.getByText('Assertions-Playwright.png')).toBeVisible();
    await expect(await page.getByText('Dialogs-Playwright.png')).toBeVisible();

    await fileUploader.setInputFiles([]);

    await expect(await page.getByText('No Files Selected')).toBeVisible();

    await page.waitForTimeout(3000);

});