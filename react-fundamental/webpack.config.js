var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    index: path.resolve(__dirname, 'src/test.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js?[hash]'
  },
  resolve: {
    extension: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader')
      },
    ]
  },
  devServer: {
    contentBase: "build",
    inline: true,
    stats: { colors: true },
    historyApiFallback: true,
    port:9099
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new HtmlWebpackPlugin({
      title: 'shiny-react',
      template: './src/index.html'
    }),
    new openBrowserWebpackPlugin({
      url: 'http://localhost:9099'
    }),
    new ExtractTextPlugin('bundle.css?[hash]')
  ],
  devtool: 'source-map'
};
