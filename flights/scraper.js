const Nightmare = require('nightmare');
const db = require( "./db/index.js" );
const flightLinks = require( "./utils/flightLinks.js" )

const nightmare = new Nightmare({ show: false });


db.all( function( docs ) {

  const urls = flightLinks.generate( docs, 180 )

  urls.reduce(function(accumulator, url) {
    return accumulator.then(function(results) {
      console.log( "URL", url )
      return nightmare.goto(url)
        .wait(10000)
        .evaluate( () => {
            const allFlights = document.querySelectorAll( ".OMOBOQD-d-P a" )
            const flightStrings = []

            for ( var i = 0; i < allFlights.length; i++ ) {
              flightStrings.push( allFlights[i].innerText )
            }
            return flightStrings
        })
        .then(function(result){
          console.log( result )
          results.push(result);
          return results;
        });
    });
  }, Promise.resolve([])).then(function(results){
      console.dir(results);
  });

})
