var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var idNum=112;
var dateJson={
  userInfo:[
    {name:'shiny',passWord:'666',id:'99',sex:'男',voteNum:3},
    {name:'pangpang',passWord:'888',id:'66',sex:'女',voteNum:4},
    {name:'pangpang1',passWord:'56',id:'63',sex:'女',voteNum:13},
    {name:'pangpang2',passWord:'56',id:'34',sex:'女',voteNum:34},
    {name:'pangpang3',passWord:'76',id:'35',sex:'女',voteNum:32},
    {name:'pangpang4',passWord:'78',id:'56',sex:'女',voteNum:38},
    {name:'pangpang5',passWord:'678',id:'78',sex:'女',voteNum:83},
    {name:'pangpang6',passWord:'78',id:'90',sex:'女',voteNum:37},
    {name:'pangpang7',passWord:'888',id:'12',sex:'女',voteNum:53},
    {name:'pangpang8',passWord:'888',id:'14',sex:'女',voteNum:36},
    {name:'pangpang9',passWord:'888',id:'16',sex:'女',voteNum:53},
    {name:'pangpang10',passWord:'888',id:'14',sex:'女',voteNum:23},
    {name:'pangpang11',passWord:'888',id:'68',sex:'女',voteNum:356},
    {name:'pangpang12',passWord:'888',id:'60',sex:'女',voteNum:310},
    {name:'pangpang13',passWord:'888',id:'45',sex:'女',voteNum:320}
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
app.get('/vote/index/data',function(req,res){
       console.log(req.query)
       var tempObj={},
            userInfoList=[];
       userInfoList.push(dateJson.userInfo.map(function(item,index){
          var obj={}
          for(var attr in item){
            if(!/passWord/.test(attr)){
              obj[attr]=item[attr];
            }
          }
          return obj;
       }))
        res.end(JSON.stringify({message:'ok',userInfoList:userInfoList}));
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
   for(var attr in req.body ){
    attr=JSON.parse(attr)
      response = {
      username:attr.username, 
      mobile: attr.mobile ,
      description:attr.description,
      gender:attr.gender ,
      password:attr.password,
      idNum:++idNum,
      voteNum:0
   };
   }
   dateJson.userInfo.push(response)
/*   setTimeout(function(){
      res.redirect('/')
   },300)*/
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