//need to "npm install request" on commandline

var request = require('request');

var url = 'http://api.open-notify.org/iss-now.json';

function printLongitudeAndLatitude() {
    request(url, function(err, response) {
        //console.log(JSON.parse(response.body).iss_position);
        if (err) {
            console.log("There is an error");
        }
        else {
            //http only transfers a String so we need to parse it, which makes thenString into Object
            console.log("latitude: " + JSON.parse(response.body).iss_position.latitude.toFixed(2));
            console.log("longitude: " + JSON.parse(response.body).iss_position.longitude.toFixed(2));
            //prints the object that has latitude and lontitude with many decimals
            //console.log(JSON.parse(response.body).iss_position);
        }
        
    });
}

printLongitudeAndLatitude();