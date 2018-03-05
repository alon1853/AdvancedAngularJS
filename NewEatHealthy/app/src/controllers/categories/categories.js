app.controller("CategoriesCtrl", function($scope, $rootScope, categoriesProperties) {
	$scope.selectedCategory = categoriesProperties.getCategory();
	
	$scope.categories = 
	[
		{ id: 1, name: "Animal" },
		{ id: 2, name: "Car" }
	];

	$scope.createCategory = function() {
		$scope.ShouldShowInvalidCategory = false;

		if ($scope.category === undefined) {
			$scope.shouldShowInvalidCategory = true;
		}
		
		if (!$scope.shouldShowInvalidCategory) {
			
		}
		
		return false;
	}

	$scope.saveEditedCategory = function() {
		$scope.ShouldShowInvalidCategory = false;

		if ($scope.category === undefined) {
			$scope.shouldShowInvalidCategory = true;
		}
		
		if (!$scope.shouldShowInvalidCategory) {
			
		}
		
		return false;
	}

	$scope.deleteSelectedCategory = function() {

	}

	$scope.setSelectedCategory = function(category) {
		categoriesProperties.setCategory(category);
	}
});