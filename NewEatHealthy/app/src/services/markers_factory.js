app.factory('markersProperties', function () {
	var marker = {};

	return {
		getMarker: function () {
			return marker;
		},
		setMarker: function(value) {
			marker = value;
		}
	};
});