app.controller("PostsCreateCtrl", function($scope, $rootScope) {
	$scope.createPost = function() {
		$scope.shouldShowInvalidCategory = false;
		$scope.shouldShowInvalidTitle = false;
		$scope.shouldShowInvalidContent = false;
		
		if ($scope.category === undefined) {
			$scope.shouldShowInvalidCategory = true;
		}
		
		if ($scope.title === undefined) {
			$scope.shouldShowInvalidTitle = true;
		}
		
		if ($scope.content === undefined) {
			$scope.shouldShowInvalidContent = true;
		}
		
		if (!$scope.shouldShowInvalidCategory && !$scope.shouldShowInvalidTitle && !$scope.shouldShowInvalidContent) {
			
		}
		
		return false;
	}
});