//Navigation Controller

taClassified.controller('navCtrl', ['$scope','ngDialog','settings', function($scope, ngDialog, settings){
	$scope.signUp = function () {
		ngDialog.open({
			template: settings.urlRegister,
			className: 'ngdialog-theme-default',
		});
	};
	$scope.logIn = function () {
		ngDialog.close();
		ngDialog.open({
			template: settings.urlLogin,
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

taClassified.controller('taCtrl', ['$scope','$http', 'DataFactory', function($scope, $http, DataFactory){

	if(!DataFactory.ads.length) {
		DataFactory.getAds()
			.success(function(data, status, headers, config){
				DataFactory.ads = data;
				$scope.ads = DataFactory.ads;
			})
			.error(function(data, status){
				console.log('error'+ status);
			});
	} else {
		$scope.ads = DataFactory.ads
	}

	$scope.postAd = function() {
		var ad = {
			title: formPost.title.value,
			description: formPost.description.value,
			contact: formPost.contact.value
		};

		$scope.ads.push(ad);
	}

}]);
