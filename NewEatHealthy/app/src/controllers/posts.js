app.controller("PostsCtrl", function($scope, $location, $rootScope, postsProperties, httpFactory) {
	$scope.selectedPost = postsProperties.getPost();
	$scope.searchParams = {}
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
		console.log($scope.posts);
	});

	$scope.editPost = function(event) {
		$scope.currentMessage = "";
		console.log($scope.selectedPost)
		if($scope.validatePost()) {
			httpFactory.putRequest("/posts/edit/"+$scope.selectedPost._id, $scope.selectedPost, function(data) {
				$scope.currentMessage = "Posts edited successfully";
			});
		}

		event.preventDefault();
	}

	$scope.deletePost = function() {
		httpFactory.deleteRequest("/posts/delete/" + $scope.selectedPost._id);
	}

	httpFactory.getRequest("/categories", function(data) {
		$scope.categories = data.data;
	});

	$scope.createPost = function(event) {
		$scope.currentMessage = "";
		
		if ($scope.validatePost()) {
			var client = $rootScope.getCurrentUser();
			$scope.selectedPost.clientId = client._id;
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

	$scope.postComment = function(post) {
		
	};

	$scope.searchPost = function(event) {
		if($scope.searchParams.title == "")
		$scope.searchParams.title = undefined;
		if($scope.searchParams.content == "")
		$scope.searchParams.content = undefined;
		if($scope.searchParams.date == "")
		$scope.searchParams.date = undefined;

		httpFactory.getRequest("/searchPosts/"+$scope.searchParams.title+"/"+$scope.searchParams.content+"/"+$scope.searchParams.date, function(data) {
			$scope.posts = data.data;
		   });
		event.preventDefault();
		};

});