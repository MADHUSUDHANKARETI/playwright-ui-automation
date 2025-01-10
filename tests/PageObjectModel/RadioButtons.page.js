const { expect } = require('@playwright/test');

exports.RadioButtons =
    class RadioButtons {

        constructor(page) {

            this.page = page
            this.clickmale = '#male'
            this.clickfemale = '#female'

        }
        async clickradiobutton() {
            await this.page.locator(this.clickmale).check()
            // const ischeck = await this.page.locator(this.clickmale).isChecked()
            // await expect page(ischeck).toBeTruthy()
            // await expect(await this.page.locator(this.clickmale).isChecked()).toBeTruthy()
            //await this.page.locator(this.clickmale).uncheck()
            //await expect(await this.page.locator(this.clickmale).isChecked()).toBeFalsy()
            await this.page.locator(this.clickfemale).check()
            // await expect(await this.page.locator(this.clickfemale).isChecked()).toBeTruthy()
            //await this.page.locator(this.clickfemale).uncheck()
            // await expect(await this.page.locator(this.clickfemale).isChecked()).toBeFalsy()
        }

    }