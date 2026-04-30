import { expect, test } from '@playwright/test';

test.describe('LUXE storefront', () => {
  test('loads the home page and shows featured content', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Featured Collection' })).toBeVisible();
    await expect(page.getByText('8 Products Found')).toBeVisible();
    await expect(page.getByTestId('product-card-1')).toBeVisible();
  });

  test('navigates to the about page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'About' }).click();

    await expect(page.getByRole('heading', { name: 'About LUXE' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Our Mission' })).toBeVisible();
  });

  test('navigates to the contact page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Contact' }).click();

    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
  });
});