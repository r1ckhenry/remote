const db = require( "./db/index.js" );
const scrape = require( "./scraper.js" );
const flightLinks = require( "./utils/flightLinks.js" )


db.all( ( airports ) => {
  var routeLinks = flightLinks.generateForOneRoute( airports[201], 3 )

  // console.log( routeLinks )

  scrape( routeLinks )

  // scrape( airports )
});
