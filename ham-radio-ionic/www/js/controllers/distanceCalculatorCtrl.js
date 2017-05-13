angular.module('app.controllers')

.controller('distanceCalculatorCtrl', function($scope, distanceCalculatorService) {

	$scope.locator = {};

	$scope.showDistance = false;

	var init = function() {
		console.log('=> init()');
		$scope.showDistance = false;
		$scope.locator.from = "";
		$scope.locator.to = "";

		distanceCalculatorService.tryToFindCurrendGridSquare().then(function(result) {
			$scope.locator.from = result;			
		});
	};

	$scope.calculate = function() {
		console.log('=> calculate()');
		if($scope.locator.from !== null && $scope.locator.from != '' && $scope.locator.to !== null && $scope.locator.to != '') {				
			$scope.distance = distanceCalculatorService.getDistanceFromGridSquares($scope.locator.from, $scope.locator.to);
			$scope.showDistance = true;
		}
	};

	// $scope.test = function() {
	// 	console.log('on passe dans test');
	// 	distanceCalculatorService.getDistanceFromCurrentPosition($scope.locator.to).then(function(result) {
	// 		console.log(result);
	// 		$scope.distance = result;
	// 		$scope.showDistance = true;
	// 	}, function(error) {
	// 		alert('problème de lecture GPS');
	// 	});
	// };

	init();

	$scope.initialize = function() {
		init();
	}
});