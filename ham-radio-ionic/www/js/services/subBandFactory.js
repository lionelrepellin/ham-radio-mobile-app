angular.module('app.services')

.factory('subBandFactory', [function(){
	var _savedData = {};

	function set(data) {
		console.log('sub band factory set data: ');
		console.log(data);
		_savedData = data;
	};

	function get() {
		console.log('sub band factory get data: ');
		console.log(_savedData);
		return _savedData;
	};

	return {
		set: set,
		get: get
	};
}]);