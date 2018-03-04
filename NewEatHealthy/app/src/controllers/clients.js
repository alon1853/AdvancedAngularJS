app.controller("ClientsCtrl", function($scope, $rootScope) {
	$scope.clients = 
	[
		{ id: 1, gender: "Male", clientName: "345", firstName: "Roni", lastName: "Milner", password: "1234", isAdmin: true },
		{ id: 2, gender: "Female", clientName: "3456", firstName: "Roni2", lastName: "Milner2", password: "12342", isAdmin: false },
	];
});