var _ = require( "lodash" )

module.exports = {

  cheapestFlightFromAirport: function( routes, code ) {
    var routesFromAirportCode = _.filter( routes, { to: code } )
    return _.minBy( routesFromAirportCode, "price" )
  }
  
}
