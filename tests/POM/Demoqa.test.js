const { test, expect } = require('@playwright/test');
const { ElementsPage } = require('./elements.page');
const { TextBoxPage } = require('./textBox.page');
const { CheckBoxPage } = require('./checkBox.page');
const { RadioButtonPage } = require('./radioButton.page');
const { WebTablesPage } = require('./webTables.page');

test('DemoQA Test', async ({ page }) => {
  const elementsPage = new ElementsPage(page);
  const textBoxPage = new TextBoxPage(page);
  const checkBoxPage = new CheckBoxPage(page);
  const radioButtonPage = new RadioButtonPage(page);
  const webTablesPage = new WebTablesPage(page);

  await page.goto("https://demoqa.com/");

  // Main method is Elements
  await elementsPage.clickElementsCard();

  // Sub-method is Text Box
  await elementsPage.clickTextBox();
  await textBoxPage.fillUserDetails('Eldonrose', 'Eldon@example.com', 'Germany', 'IceLand');
  await textBoxPage.submitForm();

  // Sub-method is Check Box
  await elementsPage.clickCheckBox();
  await checkBoxPage.clickCheckBox();

  // Sub-method is Radio Button
  await elementsPage.clickRadioButton();
  await radioButtonPage.selectYesRadioButton();

  // Sub-method is Web Tables
  await elementsPage.clickWebTables();
  await webTablesPage.clickAddNewRecord();
  await webTablesPage.fillRecordDetails('Vega', 'Alden', 'cierra@example.com', '30', '14000', 'Legal');
  await webTablesPage.submitForm();
});
