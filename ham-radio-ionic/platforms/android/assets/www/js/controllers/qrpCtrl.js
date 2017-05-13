angular.module('app.controllers')

.controller('qrpCtrl', function($scope, jsonReaderService) {
	$scope.ssbQrp = jsonReaderService.getAllQrpSsb();
	$scope.cwQrp = jsonReaderService.getAllQrpCw();
	$scope.remark = "Tout le monde n'est pas d'accord sur la définition de la puissance QRP. La plupart des adeptes du trafic QRP considèrent que pour l'émission en code Morse (CW), en modulation d'amplitude (AM), en modulation de fréquence (FM), et pour la transmission de données, la puissance de sortie de l'émetteur doit être de 5W ou moins, le maximum raisonnable pour la bande latérale unique (BLU) n'est pour l'instant pas tranché. D'autres pensent que la puissance PEP (Peak Envelope Power) doit être de 10W ou moins. En règle générale, le trafic QRP se fait même avec moins de 5W, parfois avec seulement 100mW ou en dessous. (source: Wikipédia)";
});