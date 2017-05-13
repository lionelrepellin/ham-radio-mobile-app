angular.module('app.controllers')

.controller('rstCodeCtrl', function($scope, rstCodeService) {
	$scope.codes = rstCodeService.getAll();
});