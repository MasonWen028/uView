module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          // eslint-disable-next-line prettier/prettier
          'assets': './assets',
        },
      },
    ],
  ],
};
