app.factory('markersProperties', function () {
	var marker = 'First';

	return {
		getMarker: function () {
			return marker;
		},
		setMarker: function(value) {
			marker = value;
		}
	};
});