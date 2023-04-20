describe('Simple test pack', () => {
  it('Simple', async () => {
    // find element by accessibility id
    // const appOption = $('~My Demo App');

    // // // Click on element
    // await appOption.click();

    // assertion
    const productLabel = await $('//XCUIElementTypeStaticText[@name="Products"]')
    // await expect(productLabel).toBeExisting();
    await expect(productLabel).toHaveText("Products")

    await $('//XCUIElementTypeOther[@name="Sauce Labs Backpack"]').click()

    // Already in product detail
    const productDetailLabel = await $('//XCUIElementTypeStaticText[@name="Sauce Labs Backpack"]');

    // await expect(productDetailLabel).toHaveText("AAAA");
    // Click add to carrt product
    await $('//XCUIElementTypeOther[@name="Add To Cart button"]').click()

    // Press menu bottom navigation
    // await $('//XCUIElementTypeButton[@name="tab bar option menu"]').click()

    const cartLabel = await $('//XCUIElementTypeButton[@name="tab bar option cart"]');
    
    await expect(cartLabel).toBeExisting();
    await expect(cartLabel).toHaveAttribute('label','1');



})})
