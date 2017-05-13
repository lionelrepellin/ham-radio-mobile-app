angular.module('app.controllers')

.controller('emergencyCtrl', function($scope, jsonReaderService) {
	$scope.title = "Communication d'urgence";
	$scope.header = "Centre d'activité communications d'urgence";
	$scope.frequencies = jsonReaderService.getAllEmergency();
	$scope.remark = "Ces fréquences doivent rester libres et sont utilisées uniquement en cas de catastrophes naturelles."
});