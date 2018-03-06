app.controller("ContactCtrl", function($scope) {
    $scope.map = { center: { latitude: 32.7957812, longitude: 34.930244 }, zoom: 12.2 };
    $scope.markers = [
        { id: 1, name: "place", address: "haifa", coords: { latitude: 32, longitude: 33 }, type: "fuvk" },
        { id: 2, name: "place1", address: "tlv", coords: { latitude: 34, longitude: 35 }, type: "kak" }
    ];
});