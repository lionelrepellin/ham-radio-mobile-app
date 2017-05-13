angular.module('app.controllers')

.controller('bandPlanCtrl', function($scope, jsonReaderService, bandFactory) {

	//show main bands (LF, MF, HF...)
	$scope.bands = jsonReaderService.findMainBands();

	$scope.showMainBandDetail = function(band){
		bandFactory.set(band);
	};
});