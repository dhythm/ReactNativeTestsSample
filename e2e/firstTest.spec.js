describe('a user', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should go to SignInPage first', async () => {
    await expect(element(by.id('signin'))).toBeVisible();
  });

  it('should be able to sign in with correct email and password', async () => {
    await expect(element(by.id('signin'))).toBeVisible();
    await element(by.id('input.email')).replaceText('test@example.com');
    await element(by.id('input.password')).replaceText('password1');
    await element(by.id('button.signin')).tap();
    await expect(element(by.id('home'))).toBeVisible();
  });
});
