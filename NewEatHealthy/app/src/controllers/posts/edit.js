app.controller("EditPostsCtrl", function($scope, $rootScope, sharedProperties) {
	$scope.post = sharedProperties.getProperty();
	console.log($scope.post);
});