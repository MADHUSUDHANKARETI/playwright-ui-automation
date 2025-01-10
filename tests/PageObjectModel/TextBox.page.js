const { expect } = require('@playwright/test');
exports.TextBox =
    class TextBox {

        constructor(page) {

            this.page = page
            this.enterfristname = '#name'
            this.enteremail = '#email'
            this.enterphone = '#phone'
            this.enteraddress = '#textarea'
        }
        async gotourl() {
            await this.page.goto('https://testautomationpractice.blogspot.com/')
        }
        async textboxfill(fristname,email,phone,address) {
            await this.page.locator(this.enterfristname).fill(fristname)
            await this.page.locator(this.enteremail).fill(email)
            await this.page.locator(this.enterphone).fill(phone)
            await this.page.locator(this.enteraddress).fill(address)

        }
        async assertionurl() {
            await expect(this.page).toHaveURL('https://testautomationpractice.blogspot.com/');
          }

    }