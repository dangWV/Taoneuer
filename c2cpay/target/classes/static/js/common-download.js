$("#quit").click(function(){


    $.ajax({
        //url :'http://39.107.247.211:8080/CampusFleaPlatform_war/goods/catelog',
        url :'user/exit',
		//url:'./user.json',
        type: 'post',
        async:true,
        jsonp: 'callback',
        timeout: 5000,
        
        success: function(data) {
            if(data.code == 0){

                alert("退出成功！");       
                window.location.href="./homepage.html";
            }else{
				alert("退出失败！");  
                console.log("退出失败!");
               
            }
        },
        error:function(){
            console.log("error");
        }
    });


});
$("#userSubmit").click(function(){
    window.location.href="./denglu.html";
});

$("#register").click(function(){
    window.location.href="./zhuce.html";
});
$("#buycart-box").click(function(){
    window.location.href="./buycart.html";
});