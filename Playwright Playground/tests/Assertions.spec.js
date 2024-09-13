import {test,expect} from '@playwright/test';

test('Assertions',async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    await expect(page.getByRole('link', { name: 'nopCommerce demo store' })).toBeVisible();

    await expect(page.getByPlaceholder('Search store')).toBeEnabled();

    const male = page.getByLabel('Male', { exact: true });
    await male.click();
    await expect(male).toBeChecked();
    await expect(page.getByLabel('Newsletter:')).toBeChecked();

    await expect(page.getByRole('button', { name: 'Register' })).toHaveAttribute('type','submit');

    await expect(page.getByRole('heading', { name: 'Register' })).toHaveText('Register');

    await expect(page.getByRole('heading', { name: 'Register' })).toContainText('Reg');

    const email = page.getByLabel('Email:');
    await email.fill('testemail@gmail.com');
    await expect(email).toHaveValue('testemail@gmail.com');

    const days = page.locator('select[name="DateOfBirthDay"]>option');
    await expect(days).toHaveCount(32);

    await page.waitForTimeout(1000);
});