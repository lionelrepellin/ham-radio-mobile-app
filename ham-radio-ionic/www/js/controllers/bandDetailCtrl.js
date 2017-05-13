angular.module('app.controllers')
	.controller('bandDetailCtrl', function($scope, subBandFactory, jsonReaderService) {
	    $scope.details = jsonReaderService.findBandDetailsByLabel(subBandFactory.get());

	    $scope.getFormattedList = function (remarks) {
	        if (remarks.length == 1)
	            return remarks[0];

	        var list = "<ul class='ul-list'>";
	        for(var i=0; i<remarks.length; i++) {
	            list += "<li>" + remarks[i] + "</li>";
	        }
	        list += "</ul>";
	        return list;
	    };

	    $scope.isEmpty = function (list) {
	        return (list == null || list.length == 0);
	    };
	});