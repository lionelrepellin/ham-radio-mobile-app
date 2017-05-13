angular.module('app.controllers')

.controller('qrssCtrl', function($scope, jsonReaderService) {
	$scope.title = "QRSS";
	$scope.header = "Centre d'activité QRSS";
	$scope.frequencies = jsonReaderService.getAllQrss();
	$scope.remark = "Kesako QRSS ? C’est du morse très lent  ! Vous émettez à très basse vitesse (6 secondes pour un point) et à l’autre bout l’écouteur utilise un logiciel pour visualiser ce qui a été reçu d’un coup d’oeil, ce qui permet de s’affranchir des phénomènes de QSB et de déceler des simples « traces » qui n’auraient pas été audibles. (source: blog de Laurent - F1JKJ)";
});