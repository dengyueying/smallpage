var app=angular.module("app",["ngRoute","hmd","hcl","asea"] );
	
	app.config(function($routeProvider){
		$routeProvider
		.when("/circle",{
			templateUrl:"views/circle.html",
			controller:"circont",
		})
		.when("/user",{
			templateUrl:"views/user.html",
		})
		.when("/homepage",{
			templateUrl:"views/homepage.html",
			controller:"homecont",
		}).otherwise({
			redirectTo:"/homepage",
		})
		.when("/video",{
			templateUrl:"views/video.html",
			controller:"circont",
		})
		.when("/enroll",{
			templateUrl:"views/enroll.html",
		})
		.when("/subscr",{
			templateUrl:"views/subscr.html",
			controller:"subsp",
		})
	});
	
	app.controller("main",function($scope){
	});
	
$(function(){
	$("#footlist li").on("tap",function(){
		$(this).addClass("active").siblings().removeClass("active")
	});
	
})