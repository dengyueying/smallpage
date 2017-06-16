var app=angular.module("app",["ngRoute"]);
	app.controller("main",function($scope){
		
	})
	app.config(function($routeProvider){
		$routeProvider
		.when("/circle",{
			templateUrl:"views/circle.html",
		})
		
	})
