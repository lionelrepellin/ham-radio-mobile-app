angular.module('app.controllers')

.controller('contestsCtrl', function($scope, jsonReaderService) {
	$scope.ssbContests = jsonReaderService.findAllSsbContests();
	$scope.cwContests =	jsonReaderService.findAllCwContests();
});