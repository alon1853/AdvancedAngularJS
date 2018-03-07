app.controller("PostsCtrl", function($scope, $location, $rootScope, postsProperties, httpFactory) {
	$scope.selectedPost = postsProperties.getPost();

	$scope.validatePost = function() {
		$scope.shouldShowInvalidCategory = false;
		$scope.shouldShowInvalidTitle = false;
		$scope.shouldShowInvalidContent = false;
		
		if ($scope.selectedPost.category === undefined || $scope.selectedPost.category == "") {
			$scope.shouldShowInvalidCategory = true;
			return false;
		}

		if ($scope.selectedPost.title === undefined || $scope.selectedPost.title == "") {
			$scope.shouldShowInvalidTitle = true;
			return false;
		}
		
		if ($scope.selectedPost.content === undefined || $scope.selectedPost.content == "") {
			$scope.shouldShowInvalidContent = true;
			return false;
		}

		return true;
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

	httpFactory.getRequest("/categories", function(data) {
		$scope.categories = data.data;
	});

	$scope.createPost = function(event) {
		$scope.currentMessage = "";
		
		if ($scope.validatePost()) {
			var client = $rootScope.getCurrentUser();
			$scope.selectedPost.clientId = client.id;
			httpFactory.postRequest("/posts/insert", $scope.selectedPost, function(data) {
				$scope.currentMessage = "Post added successfully";
				$scope.selectedPost = undefined;
			});
		}
	
		event.preventDefault();
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