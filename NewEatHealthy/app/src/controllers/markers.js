app.controller("MarkersCtrl", function($scope, $rootScope) {
	$scope.markers = 
	[
		{ id: 1, name: "place", address: "haifa", latitude: 32, longtitude: 33, type: "fuvk" },
		{ id: 2, name: "place1", address: "tlv", latitude: 34, longtitude: 35, type: "kak" },
	];
});