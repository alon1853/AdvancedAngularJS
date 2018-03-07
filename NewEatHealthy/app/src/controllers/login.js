app.controller("LoginCtrl", function($scope, $rootScope, $location, $cookies, httpFactory) {
	$scope.submitForm = function(event) {
		$scope.currentMessage = "";
		$scope.shouldShowInvalidUsername = false;
		$scope.shouldShowInvalidPassword = false;
		
		if ($scope.username === undefined || $scope.username === "") 
			$scope.shouldShowInvalidUsername = true;
		
		if ($scope.password === undefined || $scope.password === "")
			$scope.shouldShowInvalidPassword = true;

		if (!$scope.shouldShowInvalidUsername && !$scope.shouldShowInvalidPassword) {
			var inputData = {'userName': $scope.username, 'password': $scope.password}

			httpFactory.postRequest("/login", inputData, function(data) {
				if(Object.keys(data.data).length !== 0){
					$cookies.putObject("currentUser", data.data.client);
					$location.path( "/" );
				}
				else{
					$scope.currentMessage = "Wrong user name or Password";
				}
			});	
		}

		event.preventDefault();
	};
});