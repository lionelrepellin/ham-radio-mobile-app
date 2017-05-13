angular.module('app.controllers')

.controller('wsprCtrl', function ($scope, jsonReaderService) {
    $scope.title = "WSPR";
    $scope.header = "Centre d'activité WSPR";
    $scope.frequencies = jsonReaderService.getAllWspr();
});