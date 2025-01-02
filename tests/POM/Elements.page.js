class ElementsPage {
    constructor(page) {
      this.page = page;
      this.elementsCard = "//div[@class='card-body']/h5[text()='Elements']";
      this.textBoxLink = "//span[text()='Text Box']";
      this.checkBoxLink = "//span[text()='Check Box']";
      this.radioButtonLink = "//span[text()='Radio Button']";
      this.webTablesLink = "//span[text()='Web Tables']";
    }
  
    async clickElementsCard() {
      await this.page.click(this.elementsCard);
    }
  
    async clickTextBox() {
      await this.page.click(this.textBoxLink);
    }
  
    async clickCheckBox() {
      await this.page.click(this.checkBoxLink);
    }
  
    async clickRadioButton() {
      await this.page.click(this.radioButtonLink);
    }
  
    async clickWebTables() {
      await this.page.click(this.webTablesLink);
    }
  }
  
  module.exports = { ElementsPage };
  