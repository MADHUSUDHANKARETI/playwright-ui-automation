class WebTablesPage {
    constructor(page) {
      this.page = page;
      this.addRecordButton = "#addNewRecordButton";
      this.firstNameInput = "#firstName";
      this.lastNameInput = "#lastName";
      this.userEmailInput = "#userEmail";
      this.ageInput = "#age";
      this.salaryInput = "#salary";
      this.departmentInput = "#department";
      this.submitButton = "#submit";
    }
  
    async fillRecordDetails(firstName, lastName, email, age, salary, department) {
      await this.page.fill(this.firstNameInput, firstName);
      await this.page.fill(this.lastNameInput, lastName);
      await this.page.fill(this.userEmailInput, email);
      await this.page.fill(this.ageInput, age);
      await this.page.fill(this.salaryInput, salary);
      await this.page.fill(this.departmentInput, department);
    }
  
    async submitForm() {
      await this.page.click(this.submitButton);
    }
  
    async clickAddNewRecord() {
      await this.page.click(this.addRecordButton);
    }
  }
  
  module.exports = { WebTablesPage };
  