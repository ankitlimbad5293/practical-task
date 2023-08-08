module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '#/helpers': './src/common/helpers',
          '#/styles': './src/common/styles',
          '#/screens': './src/screens',
          '#/utils': './src/utils',
          '#/reduxStore': './src/reduxStore',
          '#/': './src/',
        },
        extensions: ['.js', '.jsx', '.json', '.svg', '.jpg', '.png'],
      },
    ],
  ],
};
