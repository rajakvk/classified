var taClassified = angular.module('taClassified', ['ngRoute', 'ngDialog']);

taClassified.constant('settings', {
	urlHome: 'template/home.html',
	urlTopNavigation: 'template/topNavigation.html',
	urlRegister: 'template/register.html',
	urlLogin: 'template/login.html'
});
/* 
** TODO - create separate file
*/

taClassified.config(['$routeProvider','settings', function($routeProvider, settings) {
	$routeProvider
		.when('/', { templateUrl: settings.urlHome, controller: 'taCtrl' });
}]);