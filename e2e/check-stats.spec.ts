import { test, expect } from '@playwright/test';

test('pie chart and counts update', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // add two todos
  await page.fill('input[type="text"]', 'First');
  await page.click('button:has-text("+")');
  await page.fill('input[type="text"]', 'Second');
  await page.click('button:has-text("+")');

  // check that list has two items
  await expect(page.locator('ul.todo-list li')).toHaveCount(2);

  // check first checkbox and ensure it is checked
  const firstCheckbox = page.locator('ul.todo-list li').first().locator('input[type="checkbox"]');
  await firstCheckbox.check();
  await expect(firstCheckbox).toBeChecked();

  // (optional) ensure pie chart rendered - detect svg presence
  await expect(page.locator('svg')).toHaveCountGreaterThan(0);
});
