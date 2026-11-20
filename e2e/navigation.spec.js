import { test, expect } from '@playwright/test';

test.describe('Site navigation', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('has the correct <h2>', async ({ page }) => {
		await expect(
			page.locator('h2', {
				hasText:
					'Actionable advice about how to do the “right” thing… better and with less stress.'
			})
		).toBeVisible();
	});

	for (const [name, path] of [
		['Start Here', '/start-here'],
		['About', '/about'],
		['Contact', '/contact']
	]) {
		test(`navigates to ${path}`, async ({ page }) => {
			await page.locator('nav a', { hasText: name }).first().click();
			await expect(page).toHaveURL(new RegExp(`${path}$`));
		});
	}
});
