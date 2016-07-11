//Request is getting data from html.

Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
}

var fs = require('fs');
var prompt = require('prompt');
var request = require('request');

/*
function getLocation() {
    prompt.get('city', function(error, response) {
        if (error) {
            console.log("There is an error");
        }
        else {
            var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+response.city;
            request(url, function(error, response) {
                //console.log(JSON.parse(response.body).results[0].geometry.location);
                if (error) {
                    console.log("There is an error");
                }
                else {
                    console.log(JSON.parse(response.body).results[0].geometry.location);
                    return JSON.parse(response.body).results[0].geometry.location;
                }
            });
        }
        
    });
}

getLocation();

//lat1, lon1 are my current location. lat2 and lon2 are where ISS is
function findDistance(lat1, lon1, lat2, lon2) {
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    
    return d;
}


function printLongitudeAndLatitudeOfISS() {
    var url = 'http://api.open-notify.org/iss-now.json';
    request(url, function(err, response) {
        //console.log(JSON.parse(response.body).iss_position);
        if (err) {
            console.log("There is an error");
        }
        else {
            return JSON.parse(response.body).iss_position;
        }
        
    });
}

printLongitudeAndLatitudeOfISS();
*/

function distanceFromCurrentLocationToISS() {
    
    findLongitudeAndLatitudeOfISS();
    
    function findLongitudeAndLatitudeOfISS() {

        var url = 'http://api.open-notify.org/iss-now.json';
        request(url, function(err, response) {
            if (err) {
                console.log("There is an error");
            }
            else {
            var latitudeOfISS = JSON.parse(response.body).iss_position.latitude;
            var longitudeOfISS = JSON.parse(response.body).iss_position.longitude;
            }
            //console.log("latitudeOfISS:" + latitudeOfISS);
            //console.log("longitudeOfISS" + longitudeOfISS);
            

            
            getLocation();
            
            function getLocation() {
                prompt.get('city', function(error, response) {
                    if (error) {
                        console.log("There is an error");
                    }
                    else {
                        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+response.city;
                        request(url, function(error, response) {
                            //console.log(JSON.parse(response.body).results[0].geometry.location);
                            if (error) {
                                console.log("There is an error");
                            }
                            else {
                                var latitudeOfCurrentLocation = JSON.parse(response.body).results[0].geometry.location.lat;
                                var longitudeOfCurrentLocation = JSON.parse(response.body).results[0].geometry.location.lng;
                            }
                            

                            console.log("latitudeOfCurrentLocation:" + latitudeOfCurrentLocation);
                            console.log("longitudeOfCurrentLocation:" + longitudeOfCurrentLocation);
                            console.log("latitudeOfISS:" + latitudeOfISS);
                            console.log("longitudeOfISS" + longitudeOfISS);
                            
                            findDistance(latitudeOfCurrentLocation,longitudeOfCurrentLocation,latitudeOfISS,longitudeOfISS);
                            
                            function findDistance(lat1, lon1, lat2, lon2) {
                                var R = 6371e3; // metres
                                var φ1 = lat1.toRadians();
                                var φ2 = lat2.toRadians();
                                var Δφ = (lat2-lat1).toRadians();
                                var Δλ = (lon2-lon1).toRadians();
                            
                                var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                                        Math.cos(φ1) * Math.cos(φ2) *
                                        Math.sin(Δλ/2) * Math.sin(Δλ/2);
                                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                            
                                var d = R * c;
                                console.log("The distance between ISS and the current location is: " + d);
                            }
                            
                            
                            
                        });
                    }
                    
                });
            }
            

        });
        
    }
    
}

distanceFromCurrentLocationToISS();
