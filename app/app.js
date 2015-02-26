var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './app/main.html',
			controller: 'MainController'
		})
		.when('/friends', {
			templateUrl: './app/friends/friends.html',
			controller: 'FriendsController'
		})

});