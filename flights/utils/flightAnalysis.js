var _ = require( "lodash" )

module.exports = {

  sortedFlightPricesFromAirport: function( routes ) {
    return _.sortBy( routes, "price" )
  },

  avgPriceOfRouteFromAirport: function( routes ) {
    return +( _.sumBy( routes, "price" ) / routes.length ).toFixed( 2 )
  },

  calcRoutePriceComparedToAverage: function( avgPrice, route ) {
    var percentage = ( route.price / avgPrice ) * 100;
    return +( 100 - percentage ).toFixed( 2 )
  }

}
