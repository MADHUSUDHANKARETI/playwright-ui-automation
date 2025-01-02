import { test, expect } from '@playwright/test';

test('DemoQA', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes")
    // await page.locator("//input[@type='checkbox'][1]").check()
    // await expect(await page.locator("//input[@type='checkbox'][1]")).toBeChecked()
    // await expect(await page.locator("//input[@type='checkbox'][1]").isChecked()).toBeTruthy()
    await expect(await page.locator("//input[@type='checkbox'][2]")).Check()
    await expect(await page.locator("//input[@type='checkbox'][2]").isChecked()).toBeFalsy()


    //await expect(await page.locator("//input[@type='checkbox'][2]")).toBeChecked()
})



