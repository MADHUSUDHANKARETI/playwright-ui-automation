const { expect } = require('@playwright/test');

exports.CheckBox =
    class CheckBox {

        constructor(page) {

            this.page = page
            this.clicksunday = '#sunday'
            this.clickmonday = '#monday'
            this.clicktuesday = '#tuesday'
            this.clickwednesday = '#wednesday'
            this.clickthursday = '#thursday'
            this.clickfriday = '#friday'
            this.clicksaturday = '#saturday'
        }
            async clickcheckbox() {
            await this.page.locator(this.clicksunday).uncheck()
            await this.page.locator(this.clickmonday).check()
            await this.page.locator(this.clicktuesday).check()
            await this.page.locator(this.clickwednesday).check()
            await this.page.locator(this.clickthursday).check()
            await this.page.locator(this.clickfriday).check()
            await this.page.locator(this.clicksaturday).check()

        }
        async assertionMonday() {
            await expect(this.clicksunday).isChecked().toBeTruthy()
            await this.page.locator(this.clicksunday).check()
            await expect(this.clicksunday).isChecked().toBeFalsy()
            
          }
    }