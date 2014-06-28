var taClassified = angular.module('taClassified', ['ngRoute', 'ngDialog']);

/* 
** TODO - create separate file
*/

taClassified.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', { templateUrl: 'template/home.html', controller: 'taCtrl' });
}]);