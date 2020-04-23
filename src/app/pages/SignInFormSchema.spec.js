import each from 'jest-each';
import { validationSchema } from './SignInFormSchema';

describe('signin form schema', () => {
  const schema = validationSchema;

  it('should allow a user to sign in with correct values', async () => {
    await expect(
      schema.validate({
        email: 'test@example.com',
        password: 'password1',
      }),
    ).resolves.not.toThrow();
  });

  each([
    ['no email supplied', '', 'password1', 'Email is required'],
    ['no password supplied', 'test@example.com', '', 'Password is required'],
    ['invalid email supplied', 'hoge', 'password1', 'Invalid email address'],
  ]).test(
    'should not submit the form: %s',
    async (_, email, password, expectedError) => {
      await expect(
        schema.validate({
          email,
          password,
        }),
      ).rejects.toThrow(expectedError);
    },
  );
});
