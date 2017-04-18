const db = require( "./db/index.js" );
const scrape = require( "./scraper.js" );
const flightLinks = require( "./utils/flightLinks.js" )

const spawn = require('threads').spawn;

db.all( ( airports ) => {

  var airport = {
    "_id": "58f48e8cfc42bd527c777a29",
    "code": "BCN",
    "name": "Eleftherios Venizelos International Airport",
    "latitude": "37.93640137",
    "longitude": "23.94449997",
    "municipality": "Athens"
  }

  var routes = flightLinks.generateForOneRoute( airport, 45 )

  // console.log( routes.length )

  // var routes2 = flightLinks.generateForOneRoute( airports[0], 30 )

  scrape( routes )
  // scrape( routes2 )

  // const thread = spawn(function( routes, done) {
  //   // Everything we do here will be run in parallel in another execution context.
  //   // Remember that this function will be executed in the thread's context,
  //   // so you cannot reference any value of the surrounding code.
  //   done( paths );
  // });

  // thread
  //   .send( routes )
  //   // The handlers come here: (none of them is mandatory)
  //   .on('message', function(response) {
  //     console.log( response );
  //     thread.kill();
  //   })
  //   .on('error', function(error) {
  //     console.error('Worker errored:', error);
  //   })
  //   .on('exit', function() {
  //     console.log('Worker has been terminated.');
  //   });


  // console.log( routeLinks.length )
  // scrape( routeLinks )
});
