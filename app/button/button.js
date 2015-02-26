var app = angular.module('App');

app.directive('domButton', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind('click', function() {
				element.html('<span class="glyphicon glyphicon-ok"></span>');
				element.addClass('circle');
			});
		}
	};
});