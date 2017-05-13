angular.module('app.controllers')

.controller('psk31Ctrl', function($scope, jsonReaderService) {
	$scope.title = "PSK31";
	$scope.header = "Centre d'activité PSK31";
	$scope.frequencies = jsonReaderService.getAllPsk31();
});