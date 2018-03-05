app.service('postsProperties', function () {
	var post = 'First';

	return {
		getPost: function () {
			return post;
		},
		setPost: function(value) {
			post = value;
		}
	};
});