$(function(){

//文本框
	$("#txt").keyup(function(e){
        if(e.which==13){  //按回车键
        	alert("请输入对应商品名称")
        }
        if(e.which==27){  //按esc键
        	$(this).val('');
        }
    })
// 肤色
	$("#hf li").eq(0).click(function(){
		$("#shop").removeClass("getZs getRedBac getSkyblue getYellow getGreen");
		$("#sub").removeClass("getZs getRedBac getSkyblue getYellow getGreen");
		$("#shop").addClass("getSblue");
		$("#sub").addClass("getSblue");
	})
	$("#hf li").eq(1).click(function(){
		$("#shop").removeClass("getRedBac getSkyblue getYellow getGreen");
		$("#sub").removeClass("getRedBac getSkyblue getYellow getGreen");
		$("#shop").addClass("getZs");
		$("#sub").addClass("getZs");
	})
	$("#hf li").eq(2).click(function(){
		$("#shop").removeClass("getSkyblue getYellow getGreen");
		$("#sub").removeClass("getSkyblue getYellow getGreen");
		$("#shop").addClass("getRedBac");
		$("#sub").addClass("getRedBac");
	})
	$("#hf li").eq(3).click(function(){
		$("#shop").removeClass("getYellow getGreen");
		$("#sub").removeClass("getYellow getGreen");
		$("#shop").addClass("getSkyblue");
		$("#sub").addClass("getSkyblue");
	})
	$("#hf li").eq(4).click(function(){
		$("#shop").removeClass("getGreen");
		$("#sub").removeClass("getGreen");
		$("#shop").addClass("getYellow");
		$("#sub").addClass("getYellow");
	})
	$("#hf li").eq(5).click(function(){
		$("#shop").addClass("getGreen");
		$("#sub").addClass("getGreen");
	});
// 换肤按钮
	function Hf(){
		var n=$("#hf li").length;
		$("#hf li:gt(0)").each(function(index){
			var index=$(this).index();
			var x=-20*(n-index)+'px';
			$("#hf li").eq(index).css("background-position",""+x+" 1px")
		})
	}
	Hf();
	$("#hf li").click(function(){
		var n=$("#hf li").length;	
		var m=$(this).index();
		var t=-20*(n-m)+'px';
		Hf();
		if(m==0){
			$(this).css("background-position","0 -15px")
		}
		else{
			$("#hf li:eq(0)").css("background-position","0 1px")	
			$(this).css("background-position",""+t+" -14px")
		}
		
	});
	// 轮播
	$("#even li").children("span").hide();
	$("#even li").eq(0).children("span").show();

	$("#pics").width($("#pics img").length*$("#pics img").width());
	
	setInterval(function(){
		var speed=$("#pics img").eq(0).outerWidth(true);
		var index=$("#pics img").length-($("#pics").width()+$("#pics").position().left)/speed;
		if(index==4){
			$("#even li").eq(0).addClass("blue").siblings().removeClass("blue");
			$("#even li").children("span").hide();
			$("#even li").eq(0).children("span").show();
		}
		else{
			$("#even li").eq(index+1).addClass("blue").siblings().removeClass("blue");
			$("#even li").children("span").hide();
			$("#even li").eq(index+1).children("span").show();
		}
		$("#pics").animate({left:$("#pics").position().left-speed},0);
	
		if($("#pics").position().left==-$("#pics").width()){
			$("#pics").animate({left:0},0);
		}
		
	},3000);

	$("#even li").each(function(index){
		$("#even li").click(function(){
			var index=$(this).index();

			var speed=$("#pics img").eq(0).outerWidth(true);
			$(this).addClass("blue").siblings().removeClass("blue");
			$("#pics").animate({left:-speed*index},0);
			$("#even li").children("span").hide();
			$("#even li").eq(index).children("span").show();
		})
	});

	
// 鞋子点击效果
	$(".footer .shot").eq(0).show().siblings().hide();
	$("#shoot li").eq(0).addClass("bs");

	$("#shoot li").children("span").hide();
	$("#shoot li").eq(0).children("span").show();

	$("#shoot li").addClass("ys");
	$("#shoot li").each(function(){
		$("#shoot li").click(function(){
			var index=$(this).index();
			$(this).addClass("bs").siblings().removeClass("bs");

			$("#shoot li").children("span").hide();
			$(this).children("span").show();

			$(".shot").eq(index).fadeIn(500).siblings().fadeOut(500);
		});

	});

// 旋转效果	
    var timer=null;		
	$(".right img").mouseover(function(){
		
		var i=0;
			timer=setInterval(function(){
				i+=7;			
				var t=i+"deg";
				if(i<720){
					$(".right img").css({"transform":" rotate("+t+")",
					"-ms-transform": "rotate("+t+")",		
					"-webkit-transform":" rotate("+t+")",	
					"-o-transform":" rotate("+t+")",		
					"-moz-transform": "rotate("+t+")"
					})
				}
				else{
					clearInterval(timer)
					$(".right img").css({"transform":" rotate(0deg)",
					"-ms-transform": "rotate(0deg)",		
					"-webkit-transform":" rotate(0deg)",	
					"-o-transform":" rotate(0deg)",		
					"-moz-transform": "rotate(0deg)"
					})
				}
			},2)
	});
	$(".right img").mouseout(function(){
		clearInterval(timer);
		var time=null;	
		var i=0;
			time=setInterval(function(){
				i-=7;			
				var t=i+"deg";
				if(i>-720){
					$(".right img").css({"transform":" rotate("+t+")",
					"-ms-transform": "rotate("+t+")",		
					"-webkit-transform":" rotate("+t+")",	
					"-o-transform":" rotate("+t+")",		
					"-moz-transform": "rotate("+t+")"
					})
				}
				else{
					clearInterval(time)
					$(".right img").css({"transform":" rotate(0deg)",
					"-ms-transform": "rotate(0deg)",		
					"-webkit-transform":" rotate(0deg)",	
					"-o-transform":" rotate(0deg)",		
					"-moz-transform": "rotate(0deg)"
					})
				}
			},2)
	});

})
				