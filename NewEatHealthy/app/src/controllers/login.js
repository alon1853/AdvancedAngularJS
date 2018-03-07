app.controller("LoginCtrl", function($scope, $rootScope, $location, $cookies, httpFactory) {
	$scope.submitForm = function(event) {
		$scope.shouldShowInvalidUsername = false;
		$scope.shouldShowInvalidPassword = false;
		
		if ($scope.username === undefined) {
			$scope.shouldShowInvalidUsername = true;

		}
		
		if ($scope.password === undefined) {
			$scope.shouldShowInvalidPassword = true;
		}
		
		if (!$scope.shouldShowInvalidUsername && !$scope.shouldShowInvalidPassword) {
			//$cookies.putObject("currentUser", { id: 3, firstName: $scope.username, lastName: $scope.username, isAdmin: true });
			var data = {'userName': $scope.username, 'password': $scope.password}

			httpFactory.postRequest("/login", data, function(data) {
				console.log(data);
			});
			//$location.path( "/" );
			
		}
		
		
		event.preventDefault();
	};
});