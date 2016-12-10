var userName=$('.username').eq(0);
var password=$('.password').eq(0);
var confirm=$('.confirm').eq(0);
var phone=$('.phone').eq(0);
var myself=$('.myself').eq(0);
$('.submit').on('click',function(){
    console.log(userName.val());
    var dataJson=JSON.stringify({
        username:userName,
        mobile:	phone,
        description:myself,
        gender:	'boy',
        password:password
    });
    $.ajax({
        type:'POST',
        url:'/vote/register/data',
        data:dataJson,
        success:function(data){
            console.log(data);
        },
        error:function(e){
            console.log(e);
        }
    });
});
