var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'templates/list.html',
		controller:'blogController'
	})
	.when('/blogs', {
		templateUrl:'templates/list.html',
		controller:'blogController'
	})
	.when('/blogs/create', {
		templateUrl:'templates/create.html',
		controller:'blogController'
	})
	.when('/blogs/:id/edit', {
		templateUrl:'templates/edit.html',
		controller:'blogController'
	})
	.when('/blogs/:id/show', {
		templateUrl:'templates/show.html',
		controller:'blogController'
	});
});
