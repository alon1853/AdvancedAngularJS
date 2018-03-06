app.factory('categoriesProperties', function () {
	var category = 'First';

	return {
		getCategory: function () {
			return category;
		},
		setCategory: function(value) {
			category = value;
		}
	};
});