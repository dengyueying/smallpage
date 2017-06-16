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
			str+="<li><a href="+obj.surl+"><img src="+obj.thumb+"></img>";
			str+="<div class='info'><h6>"+obj.title+"</h6>";
			str+="<span class='media'>"+obj.media+"</span>";
			str+="<p><img src='img/comment.png' class='comment'/>";
			if(obj.comment_count){
				obj.comment_count
			}
			else{
				obj.comment_count=0;
			}
			str+="<span>"+obj.comment_count+"</span><img src='img/remove.png' class='remove'/></p></div></a></li>"
			
		})
		$(".news").html(str)
	})
})
