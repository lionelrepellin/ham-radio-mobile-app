angular.module('app.services')

.service('distanceCalculatorService', ['$cordovaGeolocation', '$q', function($cordovaGeolocation, $q){

	// DMS: Degrees Minutes and Secunds
	function calculateCoordinatesToDMS(mpLat,mpLon) {
		var result = new Object;
		var longDir = "E";
		var longDeg;
		var longMin;
		var latDir = "N";
		var latDeg;
		var latMin;

		if (mpLon < 0) longDir = "W";
		if (mpLat < 0) latDir = "S";

		if (mpLon > 0) {
			longDeg = Math.floor(mpLon);
			longMin = (mpLon - longDeg) * 100;
		} else {
			longDeg = Math.ceil(mpLon);
			longMin = (longDeg - mpLon) * 100;
		}
		if (mpLat > 0) {
			latDeg = Math.floor(mpLat);
			latMin = (mpLat - latDeg) * 100;
		} else {
			latDeg = Math.ceil(mpLat);
			latMin = (latDeg - mpLat) * 100;
		}

		var longMin2 = longMin * 60 / 100;
		var longSec = Math.round((longMin2 - Math.floor(longMin2)) * 60);
		var latMin2 = latMin * 60 / 100;
		var latSec = Math.round((latMin2 - Math.floor(latMin2)) * 60);

		result.lonDMS = longDeg + "&deg; " + Math.floor(longMin2) + "' " + longSec + "'' "+ longDir;
		result.latDMS = latDeg + "&deg; " + Math.floor(latMin2) + "' " + latSec + "'' "+ latDir;

		return result;
	}

	function calculateCoordinatesFromGridSquares(gs1, gs2) {
		var fromGs1 = calculateCoordinatesFromGridSquare(gs1);
		var toGs2 = calculateCoordinatesFromGridSquare(gs2);

		return {
			from: fromGs1,
			to: toGs2
		};
	};

	function calculateDistanceFromCoordinates(coordinates) {
		var earthradius = 6371000;

		var lat1R = (Math.PI / 180) * coordinates.from.latitude;
		var lon1R = (Math.PI / 180) * coordinates.from.longitude;
		var lat2R = (Math.PI / 180) * coordinates.to.latitude;
		var lon2R = (Math.PI / 180) * coordinates.to.longitude;

		var dlatR = lat2R - lat1R;
		var dlonR = lon2R - lon1R;

		// great circle distance formula (Haversine)
		var a = (Math.pow((Math.sin(dlatR / 2)), 2)) + Math.cos(lat1R) * Math.cos(lat2R) * (Math.pow((Math.sin(dlonR / 2)), 2));
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		var d = earthradius * c;

		return Math.round(d / 1000);
	};

	function calculateCoordinatesFromGridSquare(gs) {
		if(gs == "" || gs == null) {
			//alert("Enter Gridsquare");
			return;
		}

		var indx = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		gs = gs.toUpperCase();
		var c1 = gs.charAt(0);
		var c2 = gs.charAt(1);
		var c3 = parseInt(gs.charAt(2));
		var c4 = parseInt(gs.charAt(3));
		var c5 = gs.charAt(4);
		var c6 = gs.charAt(5);

		if ((gs.length != 6 && gs.length != 4 && gs.length != 2 && gs.length != 0)
				|| indx.indexOf(c1) < 0 || indx.indexOf(c2) < 0 || indx.indexOf(c5) < 0
				|| indx.indexOf(c6) < 0) {
			// INVALID GRIDSQ
			//alert("Gridsquare number "+i+" is a "+ermsg);
			return;
		}

		var lon =- 180;
		lon += (indx.indexOf(c1) * 20);  // calc char 1

		var lat = ((indx.indexOf(c2) * 10) - 90); // calc char 2
		gs = c1 + c2;

		// add char 3 and 4
		if (!isNaN(c3) || !isNaN(c4)) {
		    gs = c1 + c2 + c3.toString() + c4.toString();
			lon += (2 * c3);
			lat += c4;

			//c5,6 exist, we have a 6 character gridsquare
			if (c5 != "" && c6 != "") {
				gs = c1 + c2 + c3.toString() + c4.toString() + c5.toLowerCase() + c6.toLowerCase();
				var lonm = (5 * indx.indexOf(c5)) + 2.5;
				lon += (lonm / 60);
				var latm = (2.5 * indx.indexOf(c6)) + 1.25;
				lat += (latm / 60);
			}
			// only 4 characters, so add to center on sub-square
			else {
			  lon += 1;
			  lat += 0.5;
			}
		}
		// only two characters, so center on grid-square
		else {
			lon += 10;
			lat += 5;
		}

		return {
			gridSquare: gs,
			latitude: lat,
			longitude: lon
		};
	};

	this.getDistanceFromGridSquares = function(fromGridSquare, toGridSquare) {
		var coordinates = calculateCoordinatesFromGridSquares(fromGridSquare, toGridSquare);
		var distance = calculateDistanceFromCoordinates(coordinates);
		return distance;
	};

	function findGridFromCoordinates (mpLat,mpLon) {

		/* Long/Lat to QTH locator conversion largely        */
		/* inspired from the DL4MFM code found here :        */
		/* http://members.aol.com/mfietz/ham/calcloce.html   */
		
		var ychr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var ynum = "0123456789";
		var yqth, yi, yk, ydiv, yres, ylp, y;
		var y     = 0;
		var ycalc = new Array(0,0,0);
		var yn    = new Array(0,0,0,0,0,0,0);

		ycalc[1] = mpLon + 180;
		ycalc[2] = mpLat +  90;

		for (yi = 1; yi < 3; ++yi) 
		{
			for (yk = 1; yk < 4; ++yk) 
			{
				if (yk != 3) {
					if (yi == 1) {
						if (yk == 1) ydiv = 20;
						if (yk == 2) ydiv = 2;
					}
					if (yi == 2) {
						if (yk == 1) ydiv = 10;
						if (yk == 2) ydiv = 1;
					}

					yres = ycalc[yi] / ydiv;
					ycalc[yi] = yres;

					if (ycalc[yi]>0) {
						ylp = Math.floor(yres)
					}
					else {
						ylp = Math.ceil(yres);
					}

					ycalc[yi] = (ycalc[yi] - ylp) * ydiv;
				}
				else {
					if (yi == 1) {
						ydiv = 12
					}
					else {
						ydiv = 24;
					}
					yres = ycalc[yi] * ydiv;
					ycalc[yi] = yres;
					
					if (ycalc[yi] > 0) {
						ylp = Math.floor(yres)
					}
					else {
						ylp = Math.ceil(yres);
					}
				}

			++y;
			yn[y] = ylp;
			} // end 2nd for loop
		} //end 1st for loop

		yqth = ychr.charAt(yn[1]) + ychr.charAt(yn[4]) + ynum.charAt(yn[2]);
		yqth += ynum.charAt(yn[5]) + ychr.charAt(yn[3]).toLowerCase() + ychr.charAt(yn[6]).toLowerCase();
	
		console.log('findGridFromCoordinates : ' + yqth);
		return(yqth);
	};

	this.getDistanceFromCurrentPosition = function(toGridSquare) {
		var options = {
			timeout: 10000,
			enableHighAccuracy: true
		};

		var deferred = $q.defer();

		$cordovaGeolocation.getCurrentPosition(options)
			.then(function (position) {
				var coordinates = {
					from: {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude
					},
					to: calculateCoordinatesFromGridSquare(toGridSquare)
				};

				var distance = calculateDistanceFromCoordinates(coordinates);
				deferred.resolve(distance);

			}, function(err) {
				// error
				console.log('erreur getCurrentPosition');
				deferred.reject();
			}
		);

		return deferred.promise;
	};

	this.tryToFindCurrendGridSquare = function() {
		var options = {
			timeout: 10000,
			enableHighAccuracy: true
		};

		var deferred = $q.defer();

		$cordovaGeolocation.getCurrentPosition(options)
			.then(function (position) {				
				var gridSquare = findGridFromCoordinates(position.coords.latitude, position.coords.longitude);				
				deferred.resolve(gridSquare.toUpperCase());
			}, function(err) {				
				deferred.reject();
			}
		);
		return deferred.promise;
	};

}]);