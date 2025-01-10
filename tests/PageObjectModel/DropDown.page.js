const { expect } = require('@playwright/test');
const { log } = require('console');
exports.DropDown =
    class DropDown {

        constructor(page) {

            this.page = page
            this.selectcountry = '#country'
            this.assertionCountry = '#country option'
            //}
            //async selectcounties() {
            //await this.page.locator(this.selectcountry).selectOption({lable:'India'})//By using Lable
            //await this.page.locator(this.selectcountry).selectOption('Canada')//By using Visible Text
            //await this.page.locator(this.selectcountry).selectOption({value:'uk'})//By using Value Attribute
            //await this.page.locator(this.selectcountry).selectOption({ index: 3 })//By using Index number

        }
        async assertionCountriecs() {

            // const option = await this.page.locator(this.assertionCountry)
            // await expect(option).toHaveCount(10) //1)Count the number of Options
            // const options = await this.page.$$(this.assertionCountry)
            //console.log("Number of Options" ,option.lenth)
            //expect(options.length).toBe(10)
            // const content=await this.page.locator(this.selectcountry).textContent()
            // await expect(content.includes('xyz')).toBeTruthy()
            const options = await this.page.$$(this.assertionCountry)
           let status=false


           for(const option of options)
           {
            console.log(await option.textContent())
           }
        }
    }
