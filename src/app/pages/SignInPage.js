import Button from '@core/components/Button';
import { Form, Formik } from 'formik';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { initialValues, validationSchema } from './SignInFormSchema';

const SignInPage = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => console.log('submit')}>
        {(formikProps) => (
          <Form>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(text) => formikProps.setFieldValue('email', text)}
              value={value}
              autoCompleteType="email"
            />
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(text) =>
                formikProps.setFieldValue('password', text)
              }
              value={value}
              autoCompleteType="password"
            />
            <Button title="Submit" onPress={formikProps.handleSubmit} />
          </Form>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default SignInPage;
