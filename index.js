import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/app/App';
import StorybookUIRoot from './storybook';

const isUsingStorybook = false;
AppRegistry.registerComponent(appName, () =>
  __DEV__ && isUsingStorybook ? StorybookUIRoot : App,
);
