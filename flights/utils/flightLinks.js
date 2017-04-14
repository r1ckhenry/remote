var moment = require( "moment" )

module.exports = {

  generate: function( collection ) {
    return collection.map( function( item ) {
      return "https://www.google.co.uk/flights/#search;f=EDI;t=" + item.code + ";d=2017-12-29;r=2018-01-10"
    })
  },

  datesFromTo( startDate, number ) {
    var numberOfDaysArr = new Array( number ).fill( null );

    var dates = numberOfDaysArr.map( ( el, i ) => {
      return startDate.add( i, "d" ).format( "YYYY-MM-DD" );
    })

    return dates

  }

}
