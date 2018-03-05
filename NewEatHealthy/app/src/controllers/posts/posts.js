app.controller("PostsCtrl", function($scope, $location, postsProperties) {	
	$scope.posts = [
	{
		id: 1,
		category: {
			name: "Category Name"
		},
		creationDate: new Date(),
		client: {
			clientName: "Hanan"
		},
		comments: [{
			client: {
				clientName: "Hanan"
			},
			creationDate: new Date(),
			content: "This is a long long content"
		}],
		title: "Post Title",
		content: "This is a long long content"
	}];
	
	$scope.setPostProperty = function(post) {
		postsProperties.setPost(post);
	};

});