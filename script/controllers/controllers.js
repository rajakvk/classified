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
}]);

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
}]);

taClassified.controller('taCtrl', ['$scope','$http', function($scope, $http){
	$http({method: 'GET', cache: false, url: "data/ads.json"})
		.success(function(data, status, headers, config){
			$scope.ads = data;
		})
		.error(function(data, status){
			console.log('error'+ status);
		});
}]);