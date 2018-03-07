app.controller("CategoriesCtrl", function($scope, $rootScope, $window, categoriesProperties, httpFactory) {
	$scope.selectedCategory = categoriesProperties.getCategory();

	httpFactory.getRequest("/categories", function(data) {
		$scope.categories = data.data;
	})

	$scope.validateCategory = function() {
		if ($scope.selectedCategory.name == undefined || $scope.selectedCategory.name == "") {
			$scope.shouldShowInvalidCategory = true;

			return false;
		}

		$scope.shouldShowInvalidCategory = false;
		return true;
	}

	$scope.createCategory = function(event) {
		$scope.currentMessage = "";

		if ($scope.validateCategory()) {
			httpFactory.postRequest("/categories/insert", $scope.selectedCategory, function(data) {
				$scope.currentMessage = "Category added successfully";
				$scope.selectedCategory.name = undefined;
			});
		}
		
		event.preventDefault();
	}

	$scope.saveEditedCategory = function(event) {
		$scope.currentMessage = "";

		if($scope.validateCategory()) {
			httpFactory.putRequest("/categories/edit/"+$scope.selectedCategory._id, $scope.selectedCategory, function(data) {
				$scope.currentMessage = "Category edited successfully";
				console.log("Inside callback");
				// $scope.selectedCategory.name = undefined;
			});
		}

		
		event.preventDefault();
	}

	$scope.deleteSelectedCategory = function() {
		httpFactory.deleteRequest("/categories/delete/"+$scope.selectedCategory._id);
		$window.location.href = "/#!Categories";
	}

	$scope.setSelectedCategory = function(category) {
		categoriesProperties.setCategory(category);
	}
});
