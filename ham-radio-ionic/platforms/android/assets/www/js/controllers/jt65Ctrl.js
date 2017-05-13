angular.module('app.controllers')

.controller('jt65Ctrl', function($scope, jsonReaderService) {
	$scope.title = "JT65";
	$scope.header = "Centre d'activité JT65";
	$scope.frequencies = jsonReaderService.getAllJt65();
});
