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
	// 点击图片换衣服
	$("#ys li").eq(0).show().siblings().hide();

	$("#sanzh li").click(function(){
		var i=$(this).index();

		$(this).addClass("Red").siblings().removeClass("Red");
		$("#ys li").eq(i).show().siblings().hide();
		$("#small ul").eq(i).show().siblings().hide();
		$("#big ul").eq(i).show().siblings("ul").hide();
		$("#moresmall ul").eq(i).show().siblings().hide();

		$("#moresmall ul li").click(function(){	
			$(this).addClass("Red").siblings().removeClass("Red");
			$("#small ul").eq(i).find("li").eq($(this).index()).show().siblings().hide();
			$("#big ul").eq(i).find("li").eq($(this).index()).show().siblings("ul").hide();
		})
		
	});

	$("#moresmall ul li").click(function(){
		$(this).addClass("Red").siblings().removeClass("Red");
		$("#small ul li").eq($(this).index()).show().siblings().hide();
		$("#big ul li").eq($(this).index()).show().siblings().hide();

	});

	// 产品属性点击效果
	$("#shux li").click(function(){
		$(this).addClass("getBluef").siblings().removeClass("getBluef");
		$(".xq li").eq($(this).index()).show().siblings().hide();
	});

	// 放大效果
	$("#big").hide();
	$("#dian").click(function(){
		$("#big").show();
	})
	$("#cha").click(function(){
		$("#big").hide();
	})

	// 尺码
	$(".mazi li").click(function(){
		$(this).addClass("getSkyblue").siblings().removeClass("getSkyblue");
		$(".chima").html("尺    码："+$(this).html())
	});

	// 价格总计
	$("select").on("change",function(){
		$(".zj").html("总    计："+$(this).val()*200+".00元")
	});

	// 星级评价
	$(".jixing").hide()
	var flag=true;
	$("#star li").click(function(){
		if(flag){
			flag=false;
			var i=$(this).index()+1;
			$("#star li:lt('"+i+"')").css({
				backgroundPosition:0 -32+"PX"
			});	
			$(".jixing").html("您的评价为"+i+"级评价").fadeIn().fadeOut(3000)
		}	
	})
	
	$("#star li").hover(function(){
		var i=$(this).index()+1;
		if(flag){
			$("#star li:lt('"+i+"')").css("background-position",0+" "+"-96px");
		}
	},function(){
		if(flag){
			$("#star li").css("background-position",0+" "+"0px");
		}
		
	});	
})
				