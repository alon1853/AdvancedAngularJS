app.controller("MarkersCtrl", function($scope, $rootScope, markersProperties) {
	$scope.selectedMarker = markersProperties.getMarker();

	$scope.markers = 
	[
		{ id: 1, name: "place", address: "haifa", latitude: 32, longitude: 33, type: "fuvk" },
		{ id: 2, name: "place1", address: "tlv", latitude: 34, longitude: 35, type: "kak" }
	];
	
	$scope.validateMarker = function() {
		$scope.shouldShowInvalidName = false;
		$scope.shouldShowInvalidAddress = false;
		$scope.shouldShowInvalidLatitude = false;
		$scope.shouldShowInvalidLongitude = false;
		$scope.shouldShowInvalidType= false;
		
		if ($scope.selectedMarker.name === undefined) {
			$scope.shouldShowInvalidName = true;
		}
		
		if ($scope.selectedMarker.address === undefined) {
			$scope.shouldShowInvalidAddress = true;
		}
		
		if ($scope.selectedMarker.latitude === undefined) {
			$scope.shouldShowInvalidLatitude = true;
		}
		
		if ($scope.selectedMarker.longitude === undefined) {
			$scope.shouldShowInvalidLongitude = true;
		}
		
		if ($scope.selectedMarker.type === undefined) {
			$scope.shouldShowInvalidType = true;
		}
		
		return (!$scope.shouldShowInvalidName && !$scope.shouldShowInvalidAddress && !$scope.shouldShowInvalidLatitude && 
			!$scope.shouldShowInvalidLongitude && !$scope.shouldShowInvalidType);
	}

	$scope.saveEditedMarker = function() {
		if ($scope.validateMarker()) {
			
		}
		
		return false;
	}

	$scope.createMarker = function() {
		if ($scope.validateMarker()) {
			
		}
		return false;
	}

	$scope.deleteSelectedMarker = function() {
		
	}


	
	$scope.setSelectedMarker = function(marker) {
		markersProperties.setMarker(marker);
	}
});