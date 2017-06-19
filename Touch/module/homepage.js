var hmd=angular.module("hmd",[]);
		hmd.controller("homecont",["$scope","$routeParams","$http",function($scope,$routeParams,$http){
			var str="";
			var data=$http.get(`http://proxy.e12e.com/?http://cre.dp.sina.cn/api/v3/get?
			callback=`);
			data.then(function(data){
//				console.log(data.data.data);
				angular.forEach(data.data.data,function(index,data){
					$scope.list=index;
					console.log($scope.list.title)
//						console.log(index)
//					str+="<li><a href="+index.surl+" class='link'><img src="+index.thumb+" />";
//					str+="<div class='info'><h6>"+index.title+"</h6>";
//					str+="<span class='media'>"+index.media+"</span>";
//					str+="<p><img src='img/comment.png' class='comment'/>";
//					if(!index.comment_count_show){
//						index.comment_count_show=0;
//					}
//					str+="<span>"+index.comment_count_show+"</span><img src='img/remove.png' class='remove'/></p></div></a></li>";
					
//					$scope.content=str;
//					console.log(str)
				});
				
//				
//				$(".remove").on("click",function(event){
//					event.preventDefault();
//					$(this).parent().parent().parent().remove();
//				})
				
			})
		}]);
	


