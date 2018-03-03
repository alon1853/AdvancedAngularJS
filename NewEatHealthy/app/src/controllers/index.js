app.controller("IndexCtrl", function($scope, $rootScope, $cookies) {
	$cookies.putObject("currentUser", { id: 3, firstName: "Roni", lastName: "Milner", isAdmin: true });
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