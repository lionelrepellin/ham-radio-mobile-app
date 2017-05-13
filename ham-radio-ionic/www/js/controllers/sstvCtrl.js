angular.module('app.controllers')

.controller('sstvCtrl', function($scope, jsonReaderService) {
	$scope.title = "SSTV";
	$scope.header = "Centre d'activité SSTV";
	$scope.frequencies = jsonReaderService.getAllSstv();
	$scope.remark = "Tous modes images analogiques ou digitaux dans la bande passante appropriée, par exemple SSTV ou FAX";
});