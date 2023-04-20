describe('Simple test pack', () => {
  it('Simple', async () => {
    const destinationElm = await $('(//XCUIElementTypeOther[@name="© 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy."])[2]');
    // await destinationElm.scrollIntoView();
    await driver.performActions([
      {
          // a. Create the event
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
              // b. Move finger into start position
              { type: 'pointerMove', duration: 0, x: 50, y: 285 },
              // c. Finger comes down into contact with screen
              { type: 'pointerDown', button: 0 },
              // d. Pause for a little bit
              { type: 'pause', duration: 100 },
              // e. Finger moves to end position
              //    We move our finger from the center of the element to the
              //    starting position of the element.
              //    Play with the duration to make the swipe go slower / faster
              { type: 'pointerMove', duration: 1000, x: 50, y: 15 },
              // f. Finger gets up, off the screen
              { type: 'pointerUp', button: 0 },
          ],
      },
  ]);
    await driver.pause(7000);

})})
