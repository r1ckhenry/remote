const Nightmare = require('nightmare');
const db = require( "./db/index.js" );
const flightLinks = require( "./utils/flightLinks.js" )

const nightmare = new Nightmare({ show: false });


db.all( function( docs ) {

  const urls = flightLinks.generate( docs )

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

// var airportLinks = [
//   "https://www.google.co.uk/flights/#search;f=EDI;t=LIS;d=2017-04-29;r=2017-05-12",
//   "https://www.google.co.uk/flights/#search;f=EDI;t=HKG;d=2017-04-29;r=2017-05-12"
// ]
//
// const scrape = ( link ) => {
//   const nightmare = new Nightmare({ show: false });
//   nightmare
//     .goto( link )
//     .wait( ".OMOBOQD-d-P" )
//     .evaluate( () => {
//         const allFlights = document.querySelectorAll( ".OMOBOQD-d-P a" )
//         const flightStrings = []
//
//         for ( var i = 0; i < allFlights.length; i++ ) {
//           flightStrings.push( allFlights[i].innerText )
//         }
//         return flightStrings
//     })
//     .end()
//     .then( (result) => {
//       console.log( result )
//     })
//     .catch( (error) => {
//       console.log( error )
//     })
// }
