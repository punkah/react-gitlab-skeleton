const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js',
  },
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      GIT_VERSION: JSON.stringify(new GitRevisionPlugin().version()),
    }),
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ],
};
