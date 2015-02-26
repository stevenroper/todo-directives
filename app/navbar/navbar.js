var app = angular.module('App');

app.directive('navbar', function() {
	return {
		restrict: 'E',
		templateUrl: './app/navbar/navbar.html',
		
	};
})