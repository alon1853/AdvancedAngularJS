app.factory('postsProperties', function () {
	var post = {};

	return {
		getPost: function () {
			return post;
		},
		setPost: function(value) {
			post = value;
		}
	};
});