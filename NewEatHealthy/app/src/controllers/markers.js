app.controller("MarkersCtrl", function($scope, $rootScope, $window, markersProperties, httpFactory) {
	$scope.selectedMarker = markersProperties.getMarker();

	httpFactory.getRequest("/markers", function(data) {
		$scope.markers = data.data;
	});
	
	$scope.validateMarker = function() {
		$scope.shouldShowInvalidName = false;
		$scope.shouldShowInvalidAddress = false;
		$scope.shouldShowInvalidLatitude = false;
		$scope.shouldShowInvalidLongitude = false;
		$scope.shouldShowInvalidType = false;
		
		if ($scope.selectedMarker.name === undefined || $scope.selectedMarker.name == "") {
			$scope.shouldShowInvalidName = true;
			return false;
		}

		if ($scope.selectedMarker.address === undefined || $scope.selectedMarker.address == "") {
			$scope.shouldShowInvalidAddress = true;
			return false;
		}
		
		if ($scope.selectedMarker.lat === undefined || $scope.selectedMarker.lat == "") {
			$scope.shouldShowInvalidLatitude = true;
			return false;
		}
		
		if ($scope.selectedMarker.long === undefined || $scope.selectedMarker.long == "") {
			$scope.shouldShowInvalidLongitude = true;
			return false;
		}
		
		if ($scope.selectedMarker.type === undefined || $scope.selectedMarker.type == "") {
			$scope.shouldShowInvalidType = true;
			return false;
		}

		return true;
	}

	$scope.saveEditedMarker = function(event) {
		$scope.currentMessage = "";

		if($scope.validateMarker()) {
			httpFactory.putRequest("/markers/edit/"+$scope.selectedMarker._id, $scope.selectedMarker, function(data) {
				$scope.currentMessage = "Marker edited successfully";
			});
		}

		event.preventDefault();
	}

	$scope.createMarker = function(event) {
		$scope.currentMessage = "";
		
		if ($scope.validateMarker()) {
			httpFactory.postRequest("/markers/insert", $scope.selectedMarker, function(data) {
				$scope.currentMessage = "Marker added successfully";
				$scope.selectedMarker = undefined;
			});
		}
	
		event.preventDefault();
	}

	$scope.deleteSelectedMarker = function() {
		httpFactory.deleteRequest("/markers/delete/"+$scope.selectedMarker._id);
		$window.location.href = "/#!Markers";
	}
	
	$scope.setSelectedMarker = function(marker) {
		markersProperties.setMarker(marker);
	}
});