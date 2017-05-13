angular.module('app.controllers')

.controller('jt9Ctrl', function($scope, jsonReaderService) {
	$scope.title = "JT9";
	$scope.header = "Centre d'activité JT9";
	$scope.frequencies = jsonReaderService.getAllJt9();
});
