angular.module('app.services')

.service('rstCodeService', [function(){
	this.getAll = function() {
		return rstCode;
	};
}]);