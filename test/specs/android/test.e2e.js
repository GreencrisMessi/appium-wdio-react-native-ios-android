describe('Simple test pack', () => {
  it('Simple', async () => {

    // Click bread cumb
    await $('//android.view.ViewGroup[@content-desc="open menu"]').click()
    // Click Log in
    await $('(//android.view.ViewGroup[@content-desc="store item"])[3]/android.view.ViewGroup[1]/android.widget.ImageView').click()

    await $('//*[@content-desc="Username input field"]').setValue("wrongUser");
    //Access the username input element by its class + content-desc
    await $(
      '//android.widget.EditText[@content-desc="Password input field"]'
    ).setValue("wrongPassword");
    //Access the login button by the default xpath
    await $(
      '//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView'
    ).click();
    await driver.pause(7000);

})})
