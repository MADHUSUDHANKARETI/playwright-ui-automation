const { expect } = require('@playwright/test');
const { log } = require('console');
exports.MultiDropDown =
    class MultiDropDown {

        constructor(page) {

            this.page = page
            this.selectmulticountry = '#colors'
            this.assertionmultiCountry = '#colors option'
        }
        async Mutliselectcounties() {
            await this.page.selectOption(this.selectmulticountry, ['Blue', 'Red', 'Yellow'])//.selectOption('')//By using Lable
            //await this.page.locator(this.selectcountry).selectOption('Canada')//By using Visible Text
            //await this.page.locator(this.selectcountry).selectOption({value:'uk'})//By using Value Attribute
            //await this.page.locator(this.selectcountry).selectOption({ index: 3 })//By using Index number
            await this.page.waitForTimeout(5000)
        }
        async MultiassertionCountriecs() {

            // const option = await this.page.locator(this.assertionmultiCountry)
            // await expect(option).toHaveCount(7) //1)Count the number of Options
            //2)
            // const options = await this.page.$$(this.assertionmultiCountry)
            // console.log("Number of Options" ,options.length)
            // expect(options.length).toBe(7)
            //3)check the presence of value from dropdown
            const content=await this.page.locator(this.selectmulticountry).textContent()
            await expect(content.includes('Blue')).toBeTruthy()
            //     const options = await this.page.$$(this.assertionCountry)
            //    let status=false


            //    for(const option of options)
            //    {
            //     console.log(await option.textContent())
            // }
        }
    }
