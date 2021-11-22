const { Given, When, Then } = require("@wdio/cucumber-framework");
//const { homepageBtn } = require("../pageobjects/dialog.page.js");

const dialog = require("../pageobjects/dialog.page.js");

const firstBtn = dialog.continueBtn;
const secondBtn = dialog.loginBtn;
const thirdBtn = dialog.emailBtn;
const emailRequestField = dialog.emailAddressField;
const passwordRequestField = dialog.passwordField;
const homepageLogo = dialog.homepageBtn;

Given(/^User is on the first page$/, async () => {
  await expect(firstBtn).toHaveTextContaining("CONTINUE");
});
When(/^User clicks on CONTINUE button$/, async () => {
  await firstBtn.click();
});
Then(/^LOGIN or REGISTER option page is displayed$/, async () => {
  await expect(secondBtn).toHaveTextContaining("LOG IN");
});
When(/^User clicks on LOGIN button$/, async () => {
  await secondBtn.click();
});
Then(/^Email or Facebook login option page is displayed$/, async () => {
  await expect(thirdBtn).toHaveTextContaining("EMAIL");
});
When(/^User clicks on EMAIL button$/, async () => {
  await thirdBtn.click();
});
Then(/^email address input field is displayed to the user$/, async () => {
  await expect(emailRequestField).toHaveTextContaining("email address");
});
When(
  /^User enters valid email address and clicks enter on phone touchscreen$/,
  async () => {
    await emailRequestField.setValue("dejihbk012@gmail.com");
    await driver.pressKeyCode(66);
  }
);
Then(/^password input field is displayed to the User$/, async () => {
  await expect(passwordRequestField).toHaveTextContaining("password");
});
When(
  /^User enters valid password and clicks enter on the phone touchscreen$/,
  async () => {
    await passwordRequestField.setValue("olalekan");
    await driver.pressKeyCode(66);
  }
);
Then(/^User is successfully logged in and homepage is displayed$/, async () => {
  await expect(homepageLogo).toBePresent();
});
