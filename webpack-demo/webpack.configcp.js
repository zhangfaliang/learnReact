var path = require('path');
var  HtmlWebpackPlugin=require('html-webpack-plugin');
var OpenBrowserWebpackPlugin=require('open-browser-webpack-plugin')
var webpack=require('webpack')
console.log(webpack.DefinePlugin)
function rewriteUrl(replacePath) {
  return function (req, opt) {
    var queryIndex = req.url.indexOf('?');
    var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";

    req.url = req.path.replace(opt.path, replacePath) + query;
    console.log("rewriting ", req.originalUrl, req.url);
  };
}
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});
module.exports={
	entry:'./src/index.js',
	output:{
		path:'./build',
		filename:'bundle.js'
	},
  //module下面的loaders配置的每个对象都是某个加载器
	module:{
		loaders:[
			  {
          test: /\.js$/,
          loader:  'babel'
        },
      {
        test:/\.css$/,
        loader:'style!css'
      },
      {
        test:/\.less$/,
        loader:'style!css!less'
      },
      {
        test:/\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader:'url?limit=1000'
      }
		]
	},
  //plugins是一个数组 里面放的new的对象 这些对象都有一个性质就是都可出初始化
  plugins:[
  definePlugin,
   new HtmlWebpackPlugin({
     title:'shiny',
     template:'./src/index.html',
   }),
   new OpenBrowserWebpackPlugin({
    url: 'http://localhost:9099'
   })
  ],

  //增加map文件  可怕的是自己没有什么自学能力 只看他人的dom不如直接看官方的wendang
  devtool:'cheap-module-source-map',
  //cheap-module-source-map
  // 决定解导入的时候不用在加后缀 
  resolve:{
    extenstion:['','.js','jsx','css']
  },
  //配置divserver的
	devServer:{
		  publicPath: "/static/",//产出文件
      stats: { colors: true },//设置颜色
      port: 9099,//设置端口
      contentBase: 'build',//配置根目录
      inline: true//比较低级的更新
      /*,
      proxy: [
          {
            path: /^\/api\/(.*)/,
            target: "http://localhost:8080/",
            rewrite: rewriteUrl('/$1\.json'),
            changeOrigin: true
          }
      ]*/
    }
}