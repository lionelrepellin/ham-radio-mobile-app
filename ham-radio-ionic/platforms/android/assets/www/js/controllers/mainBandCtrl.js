angular.module('app.controllers')

.controller('mainBandCtrl', function($scope, bandFactory, jsonReaderService, subBandFactory) {

	$scope.parameter = bandFactory.get();

	// show bands (1.8, 3.5, 7, 10 Mhz...) for a selected band plan (HF)
	$scope.subBands = jsonReaderService.findSubBandsWithLimits(bandFactory.get());

	// show only visible modes who appears in bands
	$scope.modes = jsonReaderService.findFilteredModes(bandFactory.get());

	$scope.showBandDetail = function(band) {
		subBandFactory.set(band);
	};
});