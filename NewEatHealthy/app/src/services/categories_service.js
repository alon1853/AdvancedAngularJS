app.factory('categoriesProperties', function () {
	var category = {};

	return {
		getCategory: function () {
			return category;
		},
		setCategory: function(value) {
			category = value;
		}
	};
});