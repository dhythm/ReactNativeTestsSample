import Button from '@core/components/Button';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import styled from 'styled-components';
import { initialValues, validationSchema } from './SignInFormSchema';

const SignInPage = ({ navigation }) => {
  return (
    <View testID="signin" style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {
          console.log('submit');
          navigation.navigate('HomePage');
        }}>
        {(formikProps) => (
          <>
            <Wrapper>
              <Input
                placeholder="email"
                onChangeText={(text) =>
                  formikProps.setFieldValue('email', text)
                }
                value={formikProps.values.email}
                autoCompleteType="email"
                textContentType="emailAddress"
              />
            </Wrapper>
            <Wrapper>
              <Input
                placeholder="password"
                onChangeText={(text) =>
                  formikProps.setFieldValue('password', text)
                }
                value={formikProps.values.password}
                autoCompleteType="password"
                secureTextEntry
                textContentType="password"
              />
            </Wrapper>

            <Button title="Sign in" onPress={formikProps.handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

const Input = styled(TextInput)`
  flex: 1;
  height: 40px;
  border-color: gray;
  border-width: 1px;
  padding: 8px;
`;

const Wrapper = styled(View)`
  flex-direction: row;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 16px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default SignInPage;
