$('.submit').on('click',function(){
    var userName=$('.username').eq(0).val();
    var password=$('.password').eq(0).val();
    var confirm=$('.confirm').eq(0).val();
    var phone=$('.phone').eq(0).val();
    var myself=$('.myself').eq(0).val();

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
