// const Nightmare = require('nightmare');
const db = require( "./db/index.js" );

db.all( function( docs ) {
    console.log( "hit" );
    console.log( docs )
})

// var airportLinks = [
//   "https://www.google.co.uk/flights/#search;f=EDI;t=LIS;d=2017-04-29;r=2017-05-12",
//   "https://www.google.co.uk/flights/#search;f=EDI;t=HKG;d=2017-04-29;r=2017-05-12"
// ]
//
// const scrape = ( link ) => {
//   const nightmare = new Nightmare({ show: true });
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
//
// airportLinks.forEach( ( link ) => {
//     scrape( link )
// })
