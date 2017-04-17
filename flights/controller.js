var express = require('express');
var router = express.Router();
var db = require( "./db/index.js" );
var flightAnalysis = require( "./utils/flightAnalysis.js" )

router.get( '/api/airports', function( req, res ) {

  if ( req.query.code ) {
    db.findOne( req.query.code, ( doc ) => {
      doc.routes = flightAnalysis.sortedFlightPricesFromAirport( doc )
      res.json( doc )
    })
  } else {
    db.all( ( docs ) => {
      res.json( docs )
    })
  }

});

module.exports = router;
