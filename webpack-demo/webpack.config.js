var path = require('path');

function rewriteUrl(replacePath) {
  return function (req, opt) {
    var queryIndex = req.url.indexOf('?');
    var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";

    req.url = req.path.replace(opt.path, replacePath) + query;
    console.log("rewriting ", req.originalUrl, req.url);
  };
}
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
				test:/\.js$/,
				loader:'babel'
			},
      {
        test:/\.css$/,
        loader:'style!css'
      },
      {
        test:/\.less$/,
        loader:'style!css!less'
      }
		]
	},
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
      inline: true/*,
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