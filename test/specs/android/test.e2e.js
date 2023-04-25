describe("Simple test pack", () => {
  it.only("Simple", async () => {
    await $(
      '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'
    ).click();
    await $(
      '(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView'
    ).click();
    await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]"
    ).click();
    await $(
      '//android.view.ViewGroup[@content-desc="geo location screen"]/android.widget.ScrollView/android.view.ViewGroup'
    ).click();

    // await driver.touchScroll([
    //   { action: 'press', x: 100, y: 500 },
    //   { action: 'moveTo', x: 100, y: 300 },
    //   'release'
    // ]);
    await driver.pause(7000);
  });
});
