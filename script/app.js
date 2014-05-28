var taClassified = angular.module('taClassified', ['ngRoute']);

/* 
** TODO - create separate file
*/

taClassified.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', { templateUrl: 'template/home.html', controller: 'taCtrl'});
}]);

/* 
** TODO - rename taCtrl
*/

taClassified.controller('taCtrl', ['$scope', function($scope){
	$scope.ads = [
		{
			title: 'Mobile phone for sale',
			description: "11 months old samsung galaxy, grand",
			contact: '968 662 9541'
		},
		{
			title: 'Apple 5s',
			description: "Mint condition, 6 months old",
			contact: '968 662 9591'
		}	];	
}]);

taClassified.filter('capitalise', function(){
	return function(str) {
		if(typeof str != 'string') return;
		return str.toUpperCase();
	}
});

// {{ ads | pluralise: {sing: 'ad', plu:'ads'}}}
taClassified.filter('pluralise', function(){
	return function(count, noun) {
		if( !noun.sing || !noun.plu ) return;
		return count > 0 ? noun.plu : noun.sing;
	}
});

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