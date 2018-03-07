app.controller("ClientsCtrl", function($scope, $rootScope, $window, $cookies, clientsProperties, httpFactory) {
	$scope.selectedClient = clientsProperties.getClient();
	$scope.searchParams = {}

	httpFactory.getRequest("/clients/"+undefined+"/"+undefined+"/"+undefined, function(data) {
		$scope.clients = data.data;
	});

	$scope.genders = ["Male", "Female"];
	
	$scope.validateClient = function() {
		$scope.shouldShowInvalidGender = false;
		$scope.shouldShowInvalidFirstname = false;
		$scope.shouldShowInvalidLastname = false;
		$scope.shouldShowInvalidClientname = false;
		$scope.shouldShowInvalidPassword = false;

		if ($scope.selectedClient.gender === undefined || $scope.selectedClient.gender == "") {
			$scope.shouldShowInvalidGender = true;
			return false;
		}

		if ($scope.selectedClient.firstName === undefined || $scope.selectedClient.firstName == "") {
			$scope.shouldShowInvalidFirstname = true;
			return false;
		}
		
		if ($scope.selectedClient.lastName === undefined || $scope.selectedClient.lastName == "") {
			$scope.shouldShowInvalidLastname = true;
			return false;
		}
		
		if ($scope.selectedClient.userName === undefined || $scope.selectedClient.userName == "") {
			$scope.shouldShowInvalidClientname = true;
			return false;
		}
		
		if ($scope.selectedClient.password === undefined || $scope.selectedClient.password == "") {
			$scope.shouldShowInvalidPassword = true;
			return false;
		}

		return true;
	}

	$scope.saveEditedClient = function(event) {
		$scope.currentMessage = "";

		if($scope.validateClient()) {
			httpFactory.putRequest("/clients/edit/"+$scope.selectedClient._id, $scope.selectedClient, function(data) {
				$scope.currentMessage = "Client edited successfully";
			});
		}

		event.preventDefault();
	}

	$scope.createClient = function(event) {
		$scope.currentMessage = "";
		
		if ($scope.validateClient()) {
			httpFactory.postRequest("/clients/insert", $scope.selectedClient, function(data) {
				$scope.currentMessage = "Client added successfully";
				$cookies.putObject("currentUser", data.data);
				$scope.selectedClient = undefined;
			});
		}
	
		event.preventDefault();
	}

	$scope.deleteSelectedClient = function() {
		httpFactory.deleteRequest("/clients/delete/"+$scope.selectedClient._id);
		$window.location.href = "/#!Clients";
	}

	$scope.searchClient = function() {
		httpFactory.getRequest("/clients/"+$scope.searchParams.clientName+"/"+$scope.searchParams.firstName+"/"+$scope.searchParams.lastName, function(data) {
			$scope.clients = data.data;
		});
	}
	
	$scope.setSelectedClient = function(client) {
		clientsProperties.setClient(client);
	}
});