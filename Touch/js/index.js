$(function(){
	//首页上面的点击效果
	$("#topline").on("tap",function(){
		$(".home-con").animate({marginLeft:0});
		$(this).addClass("active").siblings().removeClass("active");
	});
	$("#subscribe").on("tap",function(){
		$(".home-con").animate({marginLeft:"-16rem"});
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	var str="";
	$.getJSON(`http://proxy.e12e.com/?http://cre.dp.sina.cn/api/v3/get?
	callback=`,function(data){
		$(data.data).each(function(index,obj){
			console.log(obj)
		})
	})
})
