class CheckBoxPage {
    constructor(page) {
      this.page = page;
      this.checkBox = "//span[@class='rct-checkbox']";
    }
  
    async clickCheckBox() {
      await this.page.click(this.checkBox);
    }
  }
  
  module.exports = { CheckBoxPage };
  