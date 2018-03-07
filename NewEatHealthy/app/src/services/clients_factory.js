app.factory('clientsProperties', function () {
	var client = {};

	return {
		getClient: function () {
			return client;
		},
		setClient: function(value) {
			client = value;
		}
	};
});