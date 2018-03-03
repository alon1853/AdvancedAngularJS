app.controller("LoginCtrl", function($scope, $rootScope, $location, $cookies) {
	$scope.submitForm = function() {
		$scope.shouldShowInvalidUsername = false;
		$scope.shouldShowInvalidPassword = false;
		
		if ($scope.username === undefined) {
			$scope.shouldShowInvalidUsername = true;

		}
		
		if ($scope.password === undefined) {
			$scope.shouldShowInvalidPassword = true;
		}
		
		if (!$scope.shouldShowInvalidUsername && !$scope.shouldShowInvalidPassword) {
			$cookies.putObject("currentUser", { id: 3, firstName: $scope.username, lastName: $scope.username, isAdmin: true });
			$location.path( "/" );
		}
		
		return false;
	};
});