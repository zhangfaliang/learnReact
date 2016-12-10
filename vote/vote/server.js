var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dateJson={
  userInfo:[
    {name:'shiny',passWord:'666',id:'66',sex:'男'},
    {name:'pangpang',passWord:'888',id:'88',sex:'女'}
  ]
}

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(__dirname));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/vote/register', function (req, res) {
   res.sendFile( __dirname + "/src/signUp/signUp.html" );
})

/*
首页：localhost:8080/vote/index
报名页：localhost:8080/vote/register
个人详细页：localhost:8080/vote/detail/{id}
搜索页：localhost:8080/vote/search
规则页：localhost:8080/vote/rule*/
/*首页请求*/
app.post("/vote/index/info",function(req,res){
  //验证用户 
  dateJson.userInfo.find(function(item,index){
        console.log(item)
  })
  response = {
       passWord:req.body.password,
       id:req.body.id
   };
   res.end(JSON.stringify(response));
})
  
app.post('/vote/register/data', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
   response = {
    username:req.body.username, 
    mobile: req.body.mobile ,
    description:req.body.description,
    gender:req.body.gender ,
    password:req.body.password
   };
   res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})