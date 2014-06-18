var taClassified = angular.module('taClassified', ['ngRoute','ngDialog']);

//Navigation Controller

taClassified.controller('navCtrl', ['$scope','ngDialog', function($scope, ngDialog){
	$scope.signUp = function () {
		ngDialog.open({
			template: 'template/register.html',
			className: 'ngdialog-theme-default',
		});			
	};	
	$scope.logIn = function () {
		ngDialog.close();
		ngDialog.open({
			template: 'template/login.html',
			className: 'ngdialog-theme-default',
		});			
	};	
}])

// Form Controller

taClassified.controller('formCtrl', ['$scope', function($scope){
	 $scope.submitted = false;
	 //register form validation
	  $scope.submitForm = function() {
	    if ($scope.signupForm.$valid) {
	      // Submit as normal
	      console.log("done");
	    }
	    else
	    	$scope.signupForm.submitted = true;
	    	console.log("error");
	}
	//log in form validation
	$scope.submitLogIn = function() {
	    if ($scope.loginForm.$valid) {
	      // Submit as normal
	      console.log("done");
	    }
	    else
	    	$scope.loginForm.submitted = true;
	    	console.log("error");
	}
}])
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

taClassified.controller('taCtrl', ['$scope','$http' ,function($scope, $http){
	$http({method: 'GET', cache: false, url: "data/ads.json"})
		.success(function(data, status, headers, config){
			$scope.ads = data;
		})
		.error(function(data, status){
			console.log('error'+ status);
		});		
}]);



// Filter skeleton 
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