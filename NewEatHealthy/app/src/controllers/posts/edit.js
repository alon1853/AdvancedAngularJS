app.controller("PostsEditCtrl", function($scope, $rootScope, postsProperties) {
	$scope.post = postsProperties.getPost();
	$scope.categories = ["Car", "Animal"] // Hanan : get categories from DB
	console.log($scope.post);
	
	$scope.editPost = function() {
		$scope.shouldShowInvalidCategory = false;
		$scope.shouldShowInvalidTitle = false;
		$scope.shouldShowInvalidContent = false;
		
		if ($scope.post.category.name === undefined)
			$scope.shouldShowInvalidCategory = true;
		
		if ($scope.post.title === undefined)
			$scope.shouldShowInvalidTitle = true;
		
		if ($scope.post.content === undefined)
			$scope.shouldShowInvalidContent = true;
		
		if (!$scope.shouldShowInvalidCategory && !$scope.shouldShowInvalidTitle && !$scope.shouldShowInvalidContent) {
			
		}

		return false;
	}
});