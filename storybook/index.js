import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import './rn-addons';

addDecorator((storyFn) => <View style={styles.container}>{storyFn()}</View>);

// import stories
configure(() => {
  require('./stories/Button.stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
// AppRegistry.registerComponent('ReactNativeTestsSample', () => StorybookUIRoot);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default StorybookUIRoot;
