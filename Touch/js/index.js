$(function(){
	// 头条
	//轮播
	$(".banner").width($(".banner li").width()*$(".banner li").size());
	$(".point span").size==$(".banner li").size();
	console.log($(".banner").children().size )
//	setInterval(function(){
//		var ml=$(".banner").offset().left;
//		var index=$(".banner").width()/$(".banner li").size();
//		index++;
//		$(".banner").animate({marginLeft:-index*$(".banner li").size()});
//		
//		$(".point span").eq(index-1).addClass("active").siblings().removeClass("active");
//		
//	},3000);
	
	var str="";
	
	$.getJSON(`http://proxy.e12e.com/?http://cre.dp.sina.cn/api/v3/get?
	callback=`,function(data){
//		console.log(data)
		$(data.data).each(function(index,obj){
			str+="<li><a href="+obj.surl+" class='link'><img src="+obj.thumb+"></img>";
			str+="<div class='info'><h6>"+obj.title+"</h6>";
			str+="<span class='media'>"+obj.media+"</span>";
			str+="<p><img src='img/comment.png' class='comment'/>";
			if(!obj.comment_count_show){
				obj.comment_count_show=0;
			}
			str+="<span>"+obj.comment_count_show+"</span><img src='img/remove.png' class='remove'/></p></div></a></li>"
			
		});
		$(".news").html(str);
		$(".remove").on("click",function(event){
			event.preventDefault();
			$(this).parent().parent().parent().remove();

		})
	});
	
//视频
	var circle="";
	$.ajax({
		type:"get",
		url:`http://mobile.video.qq.com/fcgi-bin/getjimudata?type=1&otype=json&timeStamp=1497703567736&platform=103&version=2&ztid=100114&leafids=20131112010793%2B20150226042241%2B20150908053361&callback=jsonp2`,
		dataType:"jsonp",
		success:function(data){
			var video=data.list[0].ZT_leaf_video;
			console.log(video);
			for(let i=0;i<video.length;i++){
				circle+="<li><div class='broadcast fl-lt'><a href=//m.v.qq.com/cover/c/"+video[i].cid+".html?"+video[i].vid+">";
				circle+="<img src='img/bofa.png'/></a>";
				if(video[i].pic_453x254){
					circle+="<img src="+video[i].pic_453x254+"/></div>";
				}
				else{
					circle+="<img src="+video[i].pic_498x280+"/></div>";
				}
					
				circle+="<div class='info'><p><span class='time fl-lt'>"+video[i].publishdate_1+"</span>";
				if(video[i].view>10000){
					video[i].view=video[i].view%10000+"万";
				}
				if(video[i].view>100000000){
					video[i].view=video[i].view%100000000+"亿";
				}
				circle+="<span class='number fl-rt'>"+video[i].view+"次播放</span></p></div>";
				
				circle+="<h5>"+video[i].title+"</h5></li>"
			
			}
			$(".circlelist").html(circle);
		}
		
	});
	
	//footer
	$("#footlist li").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
})

