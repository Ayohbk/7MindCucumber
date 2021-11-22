class Dialog {
  /**
   * Define Elements
   */

  //find continue button
  get continueBtn() {
    return $('//android.widget.Button[@text = "CONTINUE"]');
  }

  //find login button
  get loginBtn() {
    return $('//android.widget.Button[@text = "LOG IN"]');
  }
  //find email button
  get emailBtn() {
    return $('//android.widget.Button[@text = "EMAIL"]');
  }
  //find email address input field
  get emailAddressField() {
    return $('//android.widget.EditText[@text = "email address"]');
  }
  //find password input field
  get passwordField() {
    return $('//android.widget.EditText[@text = "password"]');
  }
  //find 7Mind logo on homepage
  get homepageBtn() {
    return $('//android.widget.TextView[@text = "7Mind"]');
  }
}
module.exports = new Dialog();
