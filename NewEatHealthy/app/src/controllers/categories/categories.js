app.controller("CategoriesCtrl", function($scope, $rootScope, categoriesProperties) {
	$scope.selectedCategory = categoriesProperties.getCategory();
	
	$scope.categories = 
	[
		{ id: 1, name: "Animal" },
		{ id: 2, name: "Car" }
	];

	$scope.validateCategory = function() {
		$scope.ShouldShowInvalidCategory = false;

		if ($scope.category === undefined) {
			$scope.shouldShowInvalidCategory = true;
		}
		
		return (!$scope.shouldShowInvalidCategory);
	}

	$scope.createCategory = function() {
		if($scope.validateCategory()) {
			
		}
		
		return false;
	}

	$scope.saveEditedCategory = function() {
		if($scope.validateCategory()) {

		}

		
		return false;
	}

	$scope.deleteSelectedCategory = function() {

	}

	$scope.setSelectedCategory = function(category) {
		categoriesProperties.setCategory(category);
	}
});