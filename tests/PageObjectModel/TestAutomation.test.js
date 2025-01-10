import { test, expect } from '@playwright/test'

import { TextBox } from './TextBox.page'
import { RadioButtons } from './RadioButtons.page'
import { CheckBox } from './CheckBox.page'
import { DropDown } from './DropDown.page'
import { MultiDropDown } from './MutipleDropDown.page'
import { BootstrapDropDown } from './BootstrapDropDown.page'

test('TestAutomation', async ({ page }) => {

    //textbox
    const textbox = new TextBox(page)
    const radiobuttons = new RadioButtons(page)
    const checkbox = new CheckBox(page)
    const dropdown = new DropDown(page)
    const multidropdown = new MultiDropDown(page)
    const bootstrapdropdown = new BootstrapDropDown(page)

    await textbox.gotourl()
    await textbox.assertionurl(page)
    await textbox.textboxfill('Alex', 'alex@example.com', '1234567891', 'German')
    await radiobuttons.clickradiobutton()
    await checkbox.clickcheckbox()
    //await dropdown.selectcounties()
    await dropdown.assertionCountriecs()
    await multidropdown.Mutliselectcounties()
    await multidropdown.MultiassertionCountriecs()
    await bootstrapdropdown.Bootstrapselectcounties()
    await bootstrapdropdown.BootstrapassertionCountriecs()
})