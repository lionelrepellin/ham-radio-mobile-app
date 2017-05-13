angular.module('app.services')

.service('jsonReaderService', [function(){

	// table width in percent
	var _tableWidthPercent = 98;

	// right border class for the last TD element
	var _rightBorderClass = "border-right";

	function findMinFrequency(frequencies) {
		var minFrequency = _.min(frequencies, function(freqs) {
			return freqs.start;
		});
		return minFrequency.start;
	};

	function findMaxFrequency(frequencies) {
		var maxFrequency = _.max(frequencies, function(freqs) {
			return freqs.end;
		});
		return maxFrequency.end;
	};

	function findModeById(modeId) {
		return _.findWhere(bandplan.modes, { id: modeId });
	};

	function findModeIdsByBandLimit(bandLimit) {
		var modeIds = [];
		_.each(bandplan.bands, function(band) {
			_.each(band.frequencies, function(frequency) {
		    	if(frequency.start >= bandLimit.start && frequency.end <= bandLimit.end) {
		    		modeIds.push(frequency.modeId);
		    	}
		  	});
		});

		var distinctModeIds = _.uniq(modeIds);
		return distinctModeIds;
	};

	// returns column size, background color and class (only for the latest)
	// for each frequency part
	function calculateSizeAndColor(frequencies, totalBandWidth) {
		var result = [];
		var index = 1;

		_.each(frequencies, function(freq) {
			var diff = freq.end - freq.start;
			var percent = diff * _tableWidthPercent / totalBandWidth;
			var mode = findModeById(freq.modeId);
			var rightBorderClass = (index == frequencies.length) ? _rightBorderClass : '';

			result.push({
				size: percent.toFixed(1),
				bgColor: mode.background,
				borderClass: rightBorderClass
			});

			index++;
		});
		return result;
	};

	// find and add a 'mode' object into each item
	function addCorrespondingMode(items) {
		_.each(items, function(item) {
			var modeFound = _.findWhere(bandplan.modes, { id: item.modeId });
			item.mode = modeFound;
		});
	};

	function findContestsByModeId(modeId) {
		var result = [];
		_.each(bandplan.bands, function(band) {
			if(band.contests.length > 0) {

				var ssbContests = _.where(band.contests, { modeId: modeId});
				if(ssbContests.length > 0) {
					var obj = {
						label: band.label,
						contests: ssbContests
					};

					_.each(obj.contests, function(contest) {
						contest.mode = findModeById(contest.modeId);
					});
					result.push(obj);
				}
			}
		});
		return result;
	}

	function findQrpByModeId(modeId) {
	    var result = [];
	    _.each(bandplan.bands, function (band) {
	        if (band.qrp.length > 0) {
	            var qrpObj = _.where(band.qrp, { modeId: modeId });
	            if (qrpObj != null) {
	                for (var i = 0; i < qrpObj.length; i++) {
	                    var obj = {
	                        frequency: qrpObj[i].frequency,
	                        mode: findModeById(qrpObj[i].modeId)
	                    };
	                    result.push(obj);
	                }
	            }
	        }
	    });
	    return result;
	};

	// returns main band: LF, MF, HF...
	this.findMainBands = function() {
		var bands = [];
		_.each(bandplan.bandplans, function(band) {
			bands.push(band);
		});
		return bands;
	};

	// return sub bands for a specific limits
	this.findSubBandsWithLimits = function(bandLimit) {
		var bandsFound = [];
		_.each(bandplan.bands, function(band) {
			var minFreq = findMinFrequency(band.frequencies);
			var maxFreq = findMaxFrequency(band.frequencies);

			if(minFreq >= bandLimit.start && maxFreq <= bandLimit.end) {
				var totalBandWidth = maxFreq - minFreq;

				bandsFound.push({
					band: band.label,
					frequency: {
						start: minFreq,
						end: maxFreq
					},
					frequencies: calculateSizeAndColor(band.frequencies, totalBandWidth)
				});
			}
		});
		return bandsFound;
	};

	// returns all details for a selected sub-band (ex: 160)
	this.findBandDetailsByLabel = function(bandLabel) {
		var bandFound =  _.findWhere(bandplan.bands, { label: bandLabel });
		var band = angular.copy(bandFound);
		addCorrespondingMode(band.frequencies);
		if (band.psk31 !== null)
		    band.psk31Enabled = true;

		return band;
	};

    // find modes to display the legend
	this.findFilteredModes = function(bandLimit) {
		var modeIds = findModeIdsByBandLimit(bandLimit);
		var modesFound = [];
		_.each(modeIds, function(modeId) {
		    var modeFound = findModeById(modeId);
		    if (modeFound.visible) {
		        modesFound.push(modeFound);
		    }		    
		});

		return modesFound;
	};

	this.getAllModes = function() {
		return _.where(bandplan.modes, { visible: true });
	};

	function findBandsByItem(item) {
	    var result = [];
	    _.each(bandplan.bands, function (band) {
	        if (band[item] != null) {
	            result.push(band[item]);
	        }
	    });
	    return result;
	};

	this.getAllQrpSsb = function() {
		return findQrpByModeId(9);
	};

	this.getAllQrpCw = function() {
		return findQrpByModeId(1);
	};

    // TODO ...
	this.getAllWspr = function () {
	    return findBandsByItem('wspr');
	};

	this.getAllQrss = function () {
	    return findBandsByItem('qrss');
	};

	this.getAllPsk31 = function () {
	    return findBandsByItem('psk31');
	};

	this.getAllSstv = function() {
	    return findBandsByItem('sstv');
	};

	this.getAllJt9 = function() {
	    return findBandsByItem('jt9');
	};

	this.getAllJt65 = function() {
	    return findBandsByItem('jt65');
	};

	this.getAllDigitalVoice = function() {
	    return findBandsByItem('digitalVoice');
	};

	this.getAllEmergency = function() {
	    return findBandsByItem('emergency');
	};

	this.getAllUft = function() {
	    return findBandsByItem('uft');
	};

	this.findAllCwContests = function() {
		return findContestsByModeId(1);
	};

	this.findAllSsbContests = function() {
		return findContestsByModeId(9);
	};
}]);