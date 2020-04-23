module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@core': './src/core/',
          '@app': './src/app/',
        },
      },
    ],
  ],
};
