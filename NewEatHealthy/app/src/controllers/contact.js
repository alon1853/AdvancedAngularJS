app.controller("ContactCtrl", function($scope, httpFactory) {
    $scope.map = { center: { latitude: 32.7957812, longitude: 34.930244 }, zoom: 12.2 };
    $scope.markers = [];

    httpFactory.getRequest("/markers", function(data) {
        data.data.forEach(function(marker) {
            marker["coords"] = { longitude: marker.long, latitude: marker.lat };
            $scope.markers.push(marker);
        });
    });
});