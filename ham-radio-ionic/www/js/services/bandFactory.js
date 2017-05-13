angular.module('app.services')

.factory('bandFactory', [function(){
	var _savedData = {};

	function set(data) {
		console.log('factory set data: ');
		console.log(data);
		_savedData = data;
	};

	function get() {
		console.log('factory get data: ' + _savedData);
		return _savedData;
	};

	return {
		set: set,
		get: get
	};
}]);