app.controller("RecommendedPostsCtrl", function($scope, $rootScope, $window, httpFactory) {	
	httpFactory.getRequest("/posts", function(data) {
		$scope.posts = data.data;
	});
});