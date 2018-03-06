app.controller("PostsCtrl", function($scope, $location, postsProperties, httpFactory) {
	$scope.selectedPost = postsProperties.getPost();

	$scope.validatePost = function() {
		$scope.shouldShowInvalidCategory = false;
		$scope.shouldShowInvalidTitle = false;
		$scope.shouldShowInvalidContent = false;
		
		if ($scope.selectedPost.category === undefined || $scope.selectedPost.category.name === undefined)
			$scope.shouldShowInvalidCategory = true;
		
		if ($scope.selectedPost.title === undefined)
			$scope.shouldShowInvalidTitle = true;
		
		if ($scope.selectedPost.content === undefined)
			$scope.shouldShowInvalidContent = true;
		
		return (!$scope.shouldShowInvalidCategory && !$scope.shouldShowInvalidTitle && !$scope.shouldShowInvalidContent);
	}

	httpFactory.getRequest("/posts", function(data) {
		$scope.posts = data.data;
	});

	$scope.editPost = function() {
		if($scope.validatePost()) {
			httpFactory.putRequest("", $scope.selectedPost);
		}
		return false;
	}

	$scope.deletePost = function() {
		httpFactory.deleteRequest("/posts/" + $scope.selectedPost.id);
	}

	$scope.categories = 
	[
		{ id: 1, name: "Animal" },
		{ id: 2, name: "Car" }
	];

	$scope.createPost = function() {
		if($scope.validatePost()) {
			
		}
		
		return false;
	}

	// $scope.posts = [
	// {
	// 	id: 1,
	// 	category: {
	// 		name: "Category Name"
	// 	},
	// 	creationDate: new Date(),
	// 	client: {
	// 		clientName: "Hanan"
	// 	},
	// 	comments: [{
	// 		client: {
	// 			clientName: "Hanan"
	// 		},
	// 		creationDate: new Date(),
	// 		content: "This is a long long content"
	// 	}],
	// 	title: "Post Title",
	// 	content: "This is a long long content"
	// }];
	
	$scope.setSelectedPost = function(post) {
		postsProperties.setPost(post);
	};

});