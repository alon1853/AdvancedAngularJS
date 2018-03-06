app.factory('clientsProperties', function () {
	var client = 'First';

	return {
		getCategory: function () {
			return client;
		},
		setCategory: function(value) {
			client = value;
		}
	};
});