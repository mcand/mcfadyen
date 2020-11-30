const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    mcfadyen: './src/Button.js',
    example: './example/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'McFadyen News',
      chunks: ['example'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
};
