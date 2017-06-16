$(function(){
	//蒙版
	$(".mp").height($(window).height());
	
	$(".hover").hover(function(){
		$(".mp").show();
		$(this).css("z-index","100");
	},function(){
		$(".mp").hide();
		$(this).css("z-index","0")
	});
	
	//轮播
	var i=0;
	$("#prve").click(function(){
		i--;
		if(i<0){
			i=$(".tup li").length-1;
			$(".tup li").eq(i).fadeIn(500);
			$(".tup li").eq(0).fadeOut(1000);
		}
		else{
			$(".tup li").eq(i).fadeIn(500);
			$(".tup li").eq(i+1).fadeOut(1000);
		}
		
		$(".dian li").eq(i).addClass("on").siblings().removeClass("on");
	});
	$("#next").click(function(){
		i++;
		if(i>$(".tup li").length-1){
			i=0;
			$(".tup li").eq(i).fadeIn(1000);
			$(".tup li").eq($(".tup li").length-1).fadeOut(1000);
		}
		else{
			$(".tup li").eq(i).fadeIn(1000);
			$(".tup li").eq(i-1).fadeOut(1000);
		}
		
		$(".dian li").eq(i).addClass("on").siblings().removeClass("on");
	});
	$(".dian li").click(function(){
		i=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".tup li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
	});
	
	//轮播收缩区
	var n=0;
	var timer=null;
	$("#p").click(function(){
		n++
		if(n%2!=0){
			$("#shou").css("height","500px");
			$(this).css("background","#fff").html("");
			timer=setInterval(function(){
				$("#next").click();
			},3000)
		}
		else{
			$("#shou").css("height","20px");
			$(this).css("background","#19a2de").html("+");
			clearInterval(timer);
		}
	})
})
