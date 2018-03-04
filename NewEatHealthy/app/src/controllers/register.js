app.controller("RegisterCtrl", function($scope, $rootScope, $location, $cookies) {
	$scope.submitForm = function() {
		$scope.shouldShowInvalidGender = false;
		$scope.shouldShowInvalidFirstname = false;
		$scope.shouldShowInvalidLastname = false;
		$scope.shouldShowInvalidClientname = false;
		$scope.shouldShowInvalidPassword = false;
		
		if ($scope.gender === undefined) {
			$scope.shouldShowInvalidGender = true;
		}
		
		if ($scope.firstname === undefined) {
			$scope.shouldShowInvalidFirstname = true;

		}
		
		if ($scope.lastname === undefined) {
			$scope.shouldShowInvalidLastname = true;

		}
		
		if ($scope.clientname === undefined) {
			$scope.shouldShowInvalidClientname = true;

		}
		
		if ($scope.password === undefined) {
			$scope.shouldShowInvalidPassword = true;
		}
		
		if (!$scope.shouldShowInvalidFirstname && shouldShowInvalidLasttname && shouldShowInvalidClientname && !$scope.shouldShowInvalidPassword) {
			$cookies.putObject("currentUser", { id: 3, firstName: $scope.firstname, lastName: $scope.lastname, isAdmin: true });
			$location.path( "/" );
		}
		
		return false;
	};
});