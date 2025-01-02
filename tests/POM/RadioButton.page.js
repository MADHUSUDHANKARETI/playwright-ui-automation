class RadioButtonPage {
    constructor(page) {
      this.page = page;
      this.yesRadioButton = 'label.custom-control-label[for="yesRadio"]';
    }
  
    async selectYesRadioButton() {
      await this.page.click(this.yesRadioButton);
    }
  }
  
  module.exports = { RadioButtonPage };
  