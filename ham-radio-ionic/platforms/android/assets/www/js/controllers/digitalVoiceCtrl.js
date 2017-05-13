angular.module('app.controllers')

.controller('digitalVoiceCtrl', function($scope, jsonReaderService) {
	$scope.title = "Voix numérique";
	$scope.header = "Centre d'activité voix numérique";
	$scope.frequencies = jsonReaderService.getAllDigitalVoice();
});