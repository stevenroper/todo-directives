var app = angular.module('App');

app.directive('theTime', function() {
	return {
		restrict: 'E',
		template: '{{time | date:"MMMM dd, yyyy h:mma"}}',
		link: function(scope, element, attrs) {
			scope.time = Date.now();
		}
	};
});