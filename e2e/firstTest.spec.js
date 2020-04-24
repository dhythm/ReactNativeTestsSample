describe('a user', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should go to SignInPage first', async () => {
    await expect(element(by.id('signin'))).toBeVisible();
  });

  // it('should be able to sign in with correct email and password', async () => {
  //   await expect(element(by.id('signin'))).toBeVisible();
  // });
});
