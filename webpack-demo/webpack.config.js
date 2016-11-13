// 导出的是对象 module
module.exports={
	//一个entry 是一个key
	entry:'./src/index.js',
	
	//一个output 是一个key 他的value是个对象
	output:{
		path:'./build',
		filename:'bundle.js'
	},
	module:{
		loaders:[
		{
			test:/\.js$/,
			loader:"babel-loader"
		}
		]
	}
}
