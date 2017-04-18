const Nightmare = require('nightmare');
const db = require( "./db/index.js" );
const flightLinks = require( "./utils/flightLinks.js" )
const flightStrings = require( "./utils/flightStrings.js" )
const flightAnalysis = require( "./utils/flightAnalysis.js" )


module.exports = ( routes ) => {

  const nightmare = new Nightmare({ show: false });

  // const urls = flightLinks.generate( airports, 21 )

  routes.reduce(function(accumulator, route) {
    return accumulator.then(function(results) {
      console.log( "Flying from EDI to ", route.to )
      console.log( "URL ", route.path )


        return nightmare.goto(route.path)
          // .wait( 5000 )
          .wait( "div.gwt-HTML.OMOBOQD-d-P" )
          .evaluate( () => {
              const allFlights = document.querySelectorAll( ".OMOBOQD-d-P a" )
              const flightStrings = []

              for ( var i = 0; i < allFlights.length; i++ ) {
                flightStrings.push( allFlights[i].innerText )
              }
              return flightStrings
          })
          .then(function(result){
            console.log( "hit then", result )
            result.forEach( ( flightString ) => {
              const flightInfo = flightStrings.convert( route.to, route.depDate, route.retDate, flightString );
              // db.addOne( route.from, flightInfo )
              results.push(flightInfo);

              // console.log( flightInfo )
            })

            return results;
          })
          .catch( () => { return null; } )
    });
  }, Promise.resolve([])).then(function(flights){
      var flights = flightAnalysis.sortedFlightPricesFromAirport( flights )
      var avgPriceOfRoute = flightAnalysis.avgPriceOfRouteFromAirport( flights )
      var results = flights.map( ( flight ) => {
        return Object.assign( {}, flight, { percentPriceDiff: flightAnalysis.calcRoutePriceComparedToAverage( avgPriceOfRoute, flight ) } )
      })


      console.dir(results);
  });

}




// db.all( function( docs ) {
//
//   // const urls = flightLinks.generate( docs, 7 )
//
//   const urls = [
//     { path: 'https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-04-18;r=2017-04-19',
//       from: 'EDI',
//       depDate: '2017-04-18',
//       retDate: '2017-04-19',
//       to: 'STN' },
//     { path: 'https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-04-18;r=2017-04-20',
//       from: 'EDI',
//       depDate: '2017-04-18',
//       retDate: '2017-04-20',
//       to: 'STN' },
//     { path: 'https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-04-19;r=2017-04-19',
//       from: 'EDI',
//       depDate: '2017-04-19',
//       retDate: '2017-04-19',
//       to: 'STN' },
//     { path: 'https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-04-19;r=2017-04-20',
//       from: 'EDI',
//       depDate: '2017-04-19',
//       retDate: '2017-04-20',
//       to: 'STN' },
//     { path: 'https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-04-20;r=2017-04-20',
//       from: 'EDI',
//       depDate: '2017-04-20',
//       retDate: '2017-04-20',
//       to: 'STN' }]
//
//   urls.reduce(function(accumulator, url) {
//     return accumulator.then(function(results) {
//       console.log( "URL", url.to )
//       return nightmare.goto(url.path)
//         .wait(10000)
//         .evaluate( () => {
//             const allFlights = document.querySelectorAll( ".OMOBOQD-d-P a" )
//             const flightStrings = []
//
//             for ( var i = 0; i < allFlights.length; i++ ) {
//               flightStrings.push( allFlights[i].innerText )
//             }
//             return flightStrings
//         })
//         .then(function(result){
//
//           result.forEach( ( flightString ) => {
//             const flightInfo = flightStrings.convert( url.to, url.depDate, url.retDate, flightString );
//             db.addOne( url.from, flightInfo )
//
//             console.log( flightInfo )
//           })
//
//           results.push(result);
//           return results;
//         });
//     });
//   }, Promise.resolve([])).then(function(results){
//       console.dir(results);
//   });
//
// })
















// db.all( function( docs ) {
//
//   const urls = flightLinks.generate( docs, 180 )
//
//   urls.reduce(function(accumulator, url) {
//     return accumulator.then(function(results) {
//       console.log( "URL", url )
//       return nightmare.goto(url)
//         .wait(10000)
//         .evaluate( () => {
//             const allFlights = document.querySelectorAll( ".OMOBOQD-d-P a" )
//             const flightStrings = []
//
//             for ( var i = 0; i < allFlights.length; i++ ) {
//               flightStrings.push( allFlights[i].innerText )
//             }
//             return flightStrings
//         })
//         .then(function(result){
//           // console.log( result )
//           result.forEach( ( flightString ) => {
//             const flightInfo = flightStrings.convert( flightString );
//
//
//             console.log( flightInfo )
//           })
//
//           results.push(result);
//           return results;
//         });
//     });
//   }, Promise.resolve([])).then(function(results){
//       console.dir(results);
//   });
//
// })
