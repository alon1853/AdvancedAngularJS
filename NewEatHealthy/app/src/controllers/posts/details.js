app.controller("PostsDetailsCtrl", function($scope, $rootScope, postsProperties) {
	$scope.post = postsProperties.getPost();

});