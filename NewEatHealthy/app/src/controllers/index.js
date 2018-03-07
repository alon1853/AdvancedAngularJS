app.controller("TimeCtrl", function($scope, $rootScope) {
	client = io.connect('http://localhost:3001');

	client.on('seconds', function(data){
		$scope.$apply(function() { $scope.seconds = data.data; });
	});
});

app.controller("IndexCtrl", function($scope, $rootScope, $cookies) {
	
	$cookies.putObject("currentUser", { id: "5aa035fab36547ce2b497b6d", firstName: "Roni", lastName: "Milner", isAdmin: true });
	//$cookies.remove("currentUser");

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
		
		return false;
	};
});