var taClassified = angular.module('taClassified', ['ngRoute', 'ngDialog']);

taClassified.constant('settings', {
	appRoot: '/taclassified/build/',
	urlHome: 'template/home.html',
	urlTopNavigation: 'template/topNavigation.html',
	urlRegister: 'template/register.html',
	urlLogin: 'template/login.html',
	urlPost: 'template/post.html',
	urlAds: 'data/ads.json'
});
/*
** TODO - create separate file
*/

taClassified.config(['$routeProvider','settings', function($routeProvider, settings) {
	$routeProvider.when('/', {
				templateUrl: settings.urlHome,
				controller: 'taCtrl'
			});
	$routeProvider.when('/post', {
				templateUrl: settings.urlPost,
				controller: 'taCtrl'
		    });
}]);

taClassified.service('DataFactory', ['$http','settings', function($http, settings) {

	this.ads = [];

	this.getAds = function(){
		return $http.get(settings.urlAds);
	}

}]);
