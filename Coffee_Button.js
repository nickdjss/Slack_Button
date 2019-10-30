// env vars
require('dotenv').config()

//Johnny five init
const five = require('johnny-five');
board = new five.Board();

//webhook init
const url = process.env.WEBHOOK_URL;  // the custom url from IFTTT > My services > Webhooks > Documentation
request = require('request'); // use "request" for barebones http calls

board.on('ready', function() {
    console.log('Board ready');
    btn = new five.Button(2);  //create new J5 Button


     btn.on("down", function() {   // on button press...
        console.log("down");       // print "down" to the console

        request.post({						// ..then submit a post request at the webhook url. this will trigger it.
            url: url
   }, function(error, response, body) {    //responses are logged here
        console.log('Body response was ', body);
        console.log('Error was ', error);
   });

      });

    });
