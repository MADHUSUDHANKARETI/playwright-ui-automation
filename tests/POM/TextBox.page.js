class TextBoxPage {
    constructor(page) {
      this.page = page;
      this.userNameInput = "//input[@id='userName']";
      this.userEmailInput = "//input[@id='userEmail']";
      this.currentAddressTextArea = "//textarea[@id='currentAddress']";
      this.permanentAddressTextArea = "//textarea[@id='permanentAddress']";
      this.submitButton = "//button[@id='submit']";
    }
  
    async fillUserDetails(name, email, currentAddress, permanentAddress) {
      await this.page.fill(this.userNameInput, name);
      await this.page.fill(this.userEmailInput, email);
      await this.page.fill(this.currentAddressTextArea, currentAddress);
      await this.page.fill(this.permanentAddressTextArea, permanentAddress);
    }
  
    async submitForm() {
      await this.page.click(this.submitButton);
    }
  }
  
  module.exports = { TextBoxPage };
  