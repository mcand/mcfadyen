module.exports = {
  mode: 'development',
  entry: {
    mcfadyen: './src/Button.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
};
