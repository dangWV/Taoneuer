
$(function () {
    getGoods(0);
    getUserName();
});
var pagenum = 1;
var flag_more = true;

$(".xust-nav").children('li').click(function(){
	pagenum = 1;
    var catelogid = $(this).attr('catelogid');
	console.log('hh'+catelogid);
    var catelogname = $(this).text();
    $('.catelog-name').html(catelogname).attr('catelogid',catelogid);
    //getGoods(catelogid);
	getGoods(catelogid);
	console.log("点击导航栏");
});
function getGoods(catelogid){
	$.ajax({
    	//url :'http://39.107.247.211:8080/CampusFleaPlatform_war/goods/catelog',
    	//url :'http://192.168.43.213:8080/goods/catelog',
		url:'./goods/findGoods?cid='+catelogid,
		//url:'./info.json',
        type: 'GET',
        async:true,
        dataType: 'json',
        //jsonp: 'callback',
        timeout: 5000,
        /*data: {
            "pageNum" : 1,
            "pageSize" : 8,
            "catalog" : catelogid
        },*/
        success: function(data) {
            var goods_html = template('type_goods_temp',data);
			console.log(goods_html);
			console.log(typeof(data.data));
            $('.goods-list').html(goods_html);

        },
        error:function(){
            console.log("error")
        }
    });
}

//搜索
$('.goods-search').click(function(){
	var str = $('.search-text').val();
	searchQuery(str);
});
function searchQuery(key){
	var cid=0;
	$.ajax({
    	//url :'http://39.107.247.211:8080/CampusFleaPlatform_war/goods/catelog',
    	//url :'http://192.168.43.213:8080/goods/catelog',
		url:'./goods/findGoods?cid='+cid+'&key='+key,
		//url:'./list.json',
        type: 'GET',
        async:true,
        dataType: 'json',
        //jsonp: 'callback',
        timeout: 5000,
        /*data: {
            "pageNum" : 1,
            "pageSize" : 8,
            "id" : id
        },*/
        success: function(data) {
            
			$('.nothing').hide();
            $('.over').show();
           	$('.catelog-name').html("搜索结果");
			var goods_html = template('type_search_temp',data);
			console.log(goods_html);
			console.log(typeof(data.data));
            $('.goods-list').html(goods_html);
			
        },
        error:function(){
			alert('异常');
            console.log("error")
        }
    });
}

function getUserName(){
	
		$("#username").css("display","inline-block");
		$.ajax({
	    	//url :'http://39.107.247.211:8080/CampusFleaPlatform_war/goods/catelog',
	    	//url :'http://192.168.43.213:8080/user/getUserName',
			url:'./user/findUser',
			//url:'./user.json',
	        type: 'get',
	        async:true,
	        dataType: 'json',
	        timeout: 5000,
	        
	        success: function(data) {
	            //alert(data);
	           if(data.code!=-1)
				{
					$("#user").html(data.data.user_id);
					$('.undone').css('display','none');
					$('.done').css('display','block');
				}
			   else
				{
					alert('获取用户信息失败');
					$('#username').hide();
					$('.btn-primary').show();

				}
	        },
	        error:function(){
	            $('#username').hide();
				$('.btn-primary').show();
				console.log("error");
	        }
    	});

}

/*
function searchQuery(str){
	console.log(str);
		$.ajax({
    	//url :'http://39.107.247.211:8080/CampusFleaPlatform_war/goods/catelog',
    	url :'../user.json',
        type: 'GET',
        async:true,
        //dataType: 'jsonp',
        //jsonp: 'callback',
        timeout: 5000,
        data: {
            str:str
        },
        success: function(data) {
        	console.log(data);
			//var length = data.data.length;
            
            	$('.nothing').hide();
            	$('.over').show();
           		$('.catelog-name').html(str);
	            //var search_html = template('type_goods_temp',data);
				/*var goods_html = template('type_goods_temp',data);
				console.log(goods_html);
				$('.goods-list').html(goods_html);
	            //flag_more = false;
					
				
				//var list=[{"Price":12,"Name":"aaa","Age":22},{"Price":24,"Name":"bbb","Age":33}];
				var list = data.data;
				console.log(typeof(list));
				var goods_html="";
				console.log(list.length);
				/*for(var i = 0; i<list.length;i++){
					var object=data.data[i];
					goods_html+=object.name;
				}
				$('.goods-list').html(list[1].Name);
            
            
        },
        error:function(){
            console.log("搜索error")
        }
   });
}

*/
/*求购
$('.want-center').click(function(){
	var str = $('.search-text').val()
	wantQuery()
});

function wantQuery(){
		$.ajax({
    	//url :'http://39.107.247.211:8080/CampusFleaPlatform_war/goods/catelog',
    	url :'http://192.168.43.213:8080/wantgoods/selectWantGoods',
        type: 'GET',
        async:true,
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 5000,
        
        success: function(data) {
        	console.log(data)
            if(data.data.length == 0){
            	console.log('meide')
            	$('.catelog-name').html('最新发布');
            	$('.nothing').show()
            	$('.over').hide()
            	newGoods()
            }else{
            	$('.nothing').hide()
            	$('.over').show()
           		$('.catelog-name').html('求购商品');
	            var want_html = template('type_want_temp', data);
	            $('.goods-list').html(want_html);
	            flag_more = false;
            }
            
            
        },
        error:function(){
            console.log("求购error")
        }
   });
}
*/

/*
function getGoods(catelogid){
	//$('.over').hide();
	//$('.nothing').hide();
    flag_more = true;
    $('.over').show();
    $('.nothing').show();
    $.ajax({
        //url :'http://39.107.247.211:8080/CampusFleaPlatform_war/goods/catelog',
        //url :'http://192.168.43.213:8080/goods/catelog',
		url:'../list.json',
        type: 'GET',
        async:true,
        //dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 5000,
        data: {
            "pageNum" : 1,
            "pageSize" : 8,
            "catalog" : catelogid
        },
        success: function(data) {
            console.log(data+"1");
            var goods_html = template('type_goods_temp',data);
            $('.goods-list').html(goods_html);

        },
        error:function(){
            console.log("error")
        }
    });
}

function getMore(catelogid){
    $.ajax({
        //url :'http://39.107.247.211:8080/CampusFleaPlatform_war/goods/catelog',
       // url :'http://192.168.43.213:8080/goods/catelog',
	   url:'../list.json',
        type: 'GET',
        async:true,
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 5000,
        data: {
            "pageNum" : pagenum,
            "pageSize" : 8,
            "catalog" : catelogid
        },
        success: function(data) {
        	console.log(data);
            console.log(parseInt(data.pages)+1);
            console.log(pagenum);

            if(pagenum < parseInt(data.pages)+1){
            	var goods_html = template('type_goods_temp',data);

	            $('.goods-list').append(goods_html);
            }else{
            	$('.over').show();
            	flag_more = false;
            }
            

        },
        error:function(){
            console.log("error")
        }
    });
}




$(document).on("scroll",function(){
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var endHeight = docHeight - scrollTop - windowHeight;
    if (endHeight <= 0) {
        pagenum++;
        var catelogid = $('.catelog-name').attr('catelogid');
        if(flag_more){
        	//再次请求
        	getMore(catelogid);
        }
    }
});

*/
function getItemDetail(itemId){
	//alert(itemId);
	var itemId = itemId;
	//alert(itemId);
	window.location.href="./shopdetail.html?product_id="+itemId;
	//alert(id)
}
function getWantItemDetail(itemId){
	//alert(itemId);
	var itemId = itemId;
	//alert(itemId);
	window.location.href="./wantshopdetail.html?itemId="+itemId;
	//alert(id)
}



$('#user').click(function(){
	window.location.href='./personalCenter.html'
});
