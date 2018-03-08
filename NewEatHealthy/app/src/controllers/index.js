app.controller("TimeCtrl", function($scope, $rootScope, clientsProperties) {
	client = io.connect('http://localhost:3001');

	client.on('seconds', function(data){
		$scope.$apply(function() { $scope.seconds = data.data; });
	});
});

app.controller("IndexCtrl", function($scope, $rootScope, $cookies) {

	$rootScope.getCurrentUser = function() {
		var currentUser = $cookies.get("currentUser");
		if (currentUser != undefined) {
			return JSON.parse(currentUser);
		}
		
		return undefined;
	};

	$rootScope.isCurrentUserAdmin = function() {
		var currentUser = $rootScope.getCurrentUser();
		return (currentUser && currentUser.isAdmin);
	};
	
	$scope.logout = function() {
		$cookies.remove("currentUser");
		clientsProperties.setClient(undefined);
		return false;
	};
});