var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')
var buildPath = path.resolve(__dirname, 'build');
module.exports = {
   entry: {
     index: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:9099',
        path.resolve(__dirname, 'src/index.js')
      ],
      vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js?[hash]',
    },
    resolve: {
      extension: ['', '.js', '.jsx', '.json']
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader:  'babel',
          exclude: path.resolve(__dirname, 'node_modules'),
          query: {
          presets: ['es2015', 'react']
          }
        },
        {
          test: /\.css/,
          loaders:[
            'style-loader',
            'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader'
          ]
        },
        {
          test: /\.less/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        },
        {
          test:/.(png|jpg)$/,
          loader:'url?limite=8192'
        },
        {
          test:/.(woff|woff2|svg|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
          loader:'url?limite=10000'
        }
      ]
    },
    postcss: [
      require('postcss-nested')(),
      require('cssnext')(),
      require('autoprefixer-core')({ browsers: ['last 2 versions'] })
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js?[hash]'),
      new ExtractTextPlugin("[name].css?[hash]", {
          allChunks: true,
          disable: false
      }),
      new HtmlWebpackPlugin({
      title:'shiny',
      template:'./src/index.html'
      }),
      new OpenBrowserWebpackPlugin({
        url:'http://localhost:9099'
      })
    ],
    devtool:'cheap-module-source-map',
    resolve:{
      extenstions:['','.js','.css','.json']
    },
    devServer:{
      stats:{colors:true},
      port:9099
    }

};