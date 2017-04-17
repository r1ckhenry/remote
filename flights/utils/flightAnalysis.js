var _ = require( "lodash" )

module.exports = {

  sortedFlightPricesFromAirport: function( airport ) {
    return _.sortBy( airport.routes, "price" )
  },

  avgPriceOfRouteFromAirport: function( airport, code ) {
    var prices = _.filter( airport.routes, function( route ) {
      return route.to == code
    });

    return _.sumBy( prices, "price" ) / prices.length
  }

}
