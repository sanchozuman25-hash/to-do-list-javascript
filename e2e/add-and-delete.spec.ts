import { test, expect } from '@playwright/test';

test('add and delete todo', async ({ page }) => {
  await page.goto('/');

  // add a new todo
  await page.fill('input[type="text"]', 'E2E Todo');
  await page.click('button:has-text("+")');

  // assert that the todo appears in the list
  const todoItem = page.locator('li').filter({ hasText: 'E2E Todo' });
  await expect(todoItem).toHaveCount(1);

  // delete the todo by clicking the button inside the item
  const deleteButton = todoItem.locator('button');
  await deleteButton.click();

  // todo should be removed
  await expect(todoItem).toHaveCount(0);
});
