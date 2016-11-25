
var path = require('path')
var  webpack =require('webpack')
var ExtractTextPlugin=require('extract-text-webpack-plugin')
var openBrowserWebpackPlugin=require('open-browser-webpack-plugin')
var HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
  entry: {
   vendor:['react','react-dom'],//Vendor chunk 应用代码和第三方代码分离 
   index:path.resolve(__dirname,'src/test.js')
  },
 output:{
  path:path.resolve(__dirname,'build'),
  filename:'[name].js?[hash]'
 },
 resolve:{
  // 解决 延迟
  extenstion:['','.js','.css','.json']
 },
 module:{
  loaders:[
    {
      test:/\.js$/,
      loaders:['react-hot','babel']
    },
    {
      test:/\.css/,
      loader:ExtractTextPlugin.extract('style-loader','css-loader')
    },{
      test:/\.(png|jpg)$/,
      loader:'url-loader?limite=9812'
    },{
      test:/\.(woff|woff2|svg|tff|eot)(\d+\.\d+\.\d+)?$/,
      loader:'url-loader?limite=10000'
    }
  ]
 },
 devServer:{
  contentBase:'build',
  inline:true,
  port:'9099',
  stats:{colors:true},
  historyApiFallback:true
 },
 plugins:[ 
  new  webpack.optimize.CommonsChunkPlugin('vendor','vendor.js?[hash]'),
  new HtmlWebpackPlugin({
    title:'shiny',
    template:'./src/index.html'
  }),
  new openBrowserWebpackPlugin({
    url:'http://localhost:9099'
  }),
  new  ExtractTextPlugin('bundle.css?[hash]'),
 ],
  devtool: 'source-map'
};
 