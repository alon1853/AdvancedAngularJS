app.controller("ClientsCtrl", function($scope, $rootScope, clientsProperties) {
	$scope.selectedClient = clientsProperties.getCategory();
	$scope.genders = ["Male", "Female"]
	$scope.clients =
	[
		{ id: 1, gender: "Male", clientName: "345", firstName: "Roni", lastName: "Milner", password: "1234", isAdmin: true },
		{ id: 2, gender: "Female", clientName: "3456", firstName: "Roni2", lastName: "Milner2", password: "12342", isAdmin: false },
	];

	$scope.saveEditedClient = function() {
		$scope.shouldShowInvalidGender = false;
		$scope.shouldShowInvalidFirstname = false;
		$scope.shouldShowInvalidLastname = false;
		$scope.shouldShowInvalidClientname = false;
		$scope.shouldShowInvalidPassword = false;
		
		if ($scope.gender === undefined)
			$scope.shouldShowInvalidGender = true;
		
		if ($scope.firstname === undefined)
			$scope.shouldShowInvalidFirstname = true;
		
		if ($scope.lastname === undefined)
			$scope.shouldShowInvalidLastname = true;
		
		if ($scope.clientname === undefined)
			$scope.shouldShowInvalidClientname = true;
		
		if ($scope.password === undefined)
			$scope.shouldShowInvalidPassword = true;
		
		if (!$scope.shouldShowInvalidFirstname &&
			!$scope.shouldShowInvalidLastname &&
			!$scope.shouldShowInvalidClientname &&
			!$scope.shouldShowInvalidPassword) {
			
		}
		
		return false;
	}

	$scope.deleteSelectedClient = function() {
		
	}
	
	$scope.setSelectedClient = function(client) {
		clientsProperties.setCategory(client);
	}
});