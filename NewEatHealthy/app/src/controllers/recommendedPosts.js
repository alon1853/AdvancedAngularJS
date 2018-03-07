app.controller("RecommendedPostsCtrl", function($scope, $rootScope, $window, httpFactory) {	
	httpFactory.getRequest("/recomended_posts", function(data) {
		$scope.posts = data.data;
	});
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
});