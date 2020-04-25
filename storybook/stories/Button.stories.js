import Button from '@core/components/Button';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

storiesOf('Button', module)
  .add('with color', () => (
    <>
      <Button title="Hello World" onPress={action('clicked')} />
      <Button title="Hello World" palette="white" onPress={action('clicked')} />
      <Button title="Hello World" palette="blue" onPress={action('clicked')} />
      <Button title="Hello World" palette="red" onPress={action('clicked')} />
      <Button title="Hello World" palette="green" onPress={action('clicked')} />
    </>
  ))
  .add('with square', () => (
    <>
      <Button title="Hello World" square onPress={action('clicked')} />
    </>
  ));
