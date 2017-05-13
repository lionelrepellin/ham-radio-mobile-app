angular.module('app.services')

.service('fav22Service', [function(){
	var _speed = 'Vitesse';

	function findDayFromLesson(lesson) {
		var items = lesson.lesson.split(' ');
		return items[0];
	};

	function findSpeedFromLesson(lesson) {
		var items = lesson.lesson.split(' ');
		return items[items.length - 2];
	};

	function findModeFromLesson(lesson) {
		var items = lesson.lesson.split(' ');
		return items[items.length - 1];
	};

	function exists(list, obj) {
		for(var i=0; i<list.length; i++){
			if(list[i].day == obj.day && list[i].speed == obj.speed) {
				return true;
			}
		}
		return false;
	};

	this.getAll = function() {
		return fav22;
	};

	this.getAllCategories = function() {
		var categories = [];
		_.each(fav22, function(item) {

			var dayFound = findDayFromLesson(item);
			var speedFound = findSpeedFromLesson(item);

			var obj = {
				day: dayFound,
				speed: speedFound
			};

			if(!exists(categories, obj)) {
				categories.push(obj);
			}
		});
		return categories;
	};

	this.getAllModes = function() {
		var modes = [];
		_.each(fav22, function(item) {
			var mode = findModeFromLesson(item);
			modes.push(mode);
		});
		return _.uniq(modes);
	};

	this.findLessonsByCategory = function(category, data) {
		var lessons = [];
		_.each(data, function(item) {
			var dayFound = findDayFromLesson(item);
			var speedFound = findSpeedFromLesson(item);
			if(category.day == dayFound && category.speed == speedFound) {
				lessons.push(item);
			}
		});
		return lessons;
	};

	this.findLessonsByMode = function(mode, data) {
		var lessons = [];
		_.each(data, function(item) {
			var modeFound = findModeFromLesson(item);
			if(modeFound == mode) {
				lessons.push(item);
			}
		});
		return lessons;
	};

	this.showItem = function(index, data) {
		data[index].visible = true;
	};

	this.hideItem = function(index, data) {
		data[index].visible = false;
	};

	this.formatTitle = function(lesson) {
		var pos = lesson.indexOf(_speed);
		var str = lesson.substring(0, pos).trim();
		return str;
	};
}]);