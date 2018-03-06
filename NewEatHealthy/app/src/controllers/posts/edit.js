app.controller("PostsEditCtrl", function($scope, $rootScope, postsProperties) {
	$scope.post = postsProperties.getPost();
	console.log($scope.post);
	
	$scope.editPost = function() {
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