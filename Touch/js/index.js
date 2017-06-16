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
		console.log(data)
		$(data.data).each(function(index,obj){
			str+="<li><img src="+obj.thumb+"></img>";
			str+="<div class='info'><h6>"+obj.title+"</h6>";
			str+="<span class='media'>"+obj.media+"</span>";
			str+="<p><img src='img/comment.png' class='comment'/>"
			str+="<span>"+obj.appProduct+"</span><img src='img/remove.png' class='remove'/></p></div></li>"
		})
		$(".news").html(str)
	})
})
