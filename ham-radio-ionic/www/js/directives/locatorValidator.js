angular.module('app.directives')

.directive('locatorValidator', [function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, formController) {
            function myValidation(value) {

				var isNumber = function(value) {
					//if(value.trim() != "" && value.length == 2 && !isNaN(parseInt(value.charAt(0))) && !isNaN(parseInt(value.charAt(1)))) {
					if(!isNaN(parseInt(value.charAt(0))) && !isNaN(parseInt(value.charAt(1)))) {
						return true;
					}
					return false;
				};

				var isText = function(value) {
					//if(value.trim() != "" && value.length == 2 && isNaN(value.charAt(0)) && isNaN(value.charAt(1))) {
					if(isNaN(value.charAt(0)) && isNaN(value.charAt(1))) {
						return true;
					}
					return false;
				};

				var result = false;

				if(value.trim().length == 2) {
					result = isText(value);
					//console.log('[' + value + '] result => ' + result);
				}
				else if(value.trim().length == 4) {
					var r1 = isText(value.substring(0, 2));
					var r2 = isNumber(value.substring(2, 4));
					result = r1 && r2;
					//console.log('[' + value + '] r1 => ' + r1 + ' - r2 => ' + r2 + ' == result = ' + result);
				}
				else if(value.trim().length == 6) {
					var r3 = isText(value.substring(0, 2));
					var r4 = isNumber(value.substring(2, 4));
					var r5 = isText(value.substring(4, 6));
					result = r3 && r4 && r5;
					//console.log('[' + value + '] r1 => ' + r1 + ' - r2 => ' + r2 + ' - r3 => ' + r3  + ' == result = ' + result);
				}

				formController.$setValidity('locator', result);
				return value;
            }
            formController.$parsers.push(myValidation);
        }
    };
}]);