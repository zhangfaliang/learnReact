var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dateJson={
  userInfo:[
    {name:'shiny',passWord:'666',id:'66',sex:'男'},
    {name:'pangpang',passWord:'888',id:'88',sex:'女'}
  ]
}
/*项目需求
实现投票获奖活动，票数越高，排名越高。
只有报名用户才可以参加投票，每人最多投5票，每一个投票者最多只能投一票给同一个人。
报名用户既是投票者，也是被投票者。
用户未登入时，首页橙色按钮显示我要报名状态，点击进入报名页。
用户已登入，首页橙色按钮显示个人主页，点击进入登入者的个人主页。
用户未登入进行投票，点击投票则提示用户先登入或者报名才可以参与投票。
首页搜索内容可以为用户的名称或编号，如有多个相同名称，则返回所有匹配名称的用户信息。
搜索页的用户内容也可以进行投票，投票行为和首页的投票行为一致。
首页用户信息通过上拉加载刷新进行分页，每页为十条数据。
个人详细页需要显示投票者信息。
*/
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(__dirname));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/vote/register', function (req, res) {
   res.sendFile( __dirname + "/src/signUp/signUp.html" );
})
app.get('/vote/vote', function (req, res) {
   res.sendFile( __dirname + "/src/rule/rule.html" );
})
app.get('/vote/all/detail/data',function(req,res){
   res.sendFile( __dirname + "/src/personInfo/personInfo.html" );
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
   console.log(req.body)
   for(var attr in req.body ){
    attr=JSON.parse(attr)
      response = {
      username:attr.username, 
      mobile: attr.mobile ,
      description:attr.description,
      gender:attr.gender ,
      password:attr.password
   };
   }
   dateJson.userInfo.push(response)
   res.end(JSON.stringify({message:'ok',userInfor:response}));
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