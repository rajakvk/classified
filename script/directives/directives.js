// directive skeleton
taClassified.directive('ta-angry', function(){
	return {
		restrict: 'E',
		template: '&gt;:( <span ng-transclude></span> !!',
		transclude: true,
		link: function($scope, element, attrs) {
			element.css({
				'background-color': 'yellow',
				color: 'red',
				padding: '10px',
				'font-weight': 'bold'
			});
		}
	};
});

taClassified.directive('topNav', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'template/topNavigation.html',		
	};
});