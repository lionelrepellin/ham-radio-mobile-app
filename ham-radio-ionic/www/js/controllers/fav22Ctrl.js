angular.module('app.controllers')

.controller('fav22Ctrl', function($scope, fav22Service) {

	$scope.solutions = null;

	$scope.categories = fav22Service.getAllCategories();

	$scope.modes = fav22Service.getAllModes();

	// $scope.categorySelected = {
	// 	category: $scope.categories[0]
	// };

	$scope.categorySelected = {
		category: { }
	};


	$scope.showSolution = function(index) {
		fav22Service.showItem(index, $scope.solutions);
	};

	$scope.hideSolution = function(index) {
		fav22Service.hideItem(index, $scope.solutions);
	};

	$scope.isEncrypted = function(lesson) {
		var result = lesson.indexOf("codé");
		return result > 0;
	};

	$scope.findByCategory = function(category) {
		var all = fav22Service.getAll();
		$scope.solutions = fav22Service.findLessonsByCategory(category, all);
	};

	$scope.findByMode = function(mode) {
		var filteredData = $scope.solutions.length > 0 ? angular.copy($scope.solutions) : fav22Service.getAll();
		var data = fav22Service.findLessonsByMode(mode, filteredData);
		if(data.length == 0) {
			filteredData = fav22Service.getAll();
			data = fav22Service.findLessonsByMode(mode, filteredData);
		}
		$scope.solutions = data;
	};

	$scope.formatTitle = function(title) {
		return fav22Service.formatTitle(title);
	};
});