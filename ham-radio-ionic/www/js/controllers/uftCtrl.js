angular.module('app.controllers')

.controller('uftCtrl', function($scope, jsonReaderService) {
	$scope.title = "Union Française des Télégraphistes";
	$scope.header = "Centre d'activité CW de l'UFT";
	$scope.frequencies = jsonReaderService.getAllUft();
});