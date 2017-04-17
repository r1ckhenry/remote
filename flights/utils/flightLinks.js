var moment = require( "moment" )

module.exports = {

  generateForOneRoute: function( airport, days ) {
    var dates = this.datesFromTodayTo( days )
    return this.createLinks( airport.code, dates )
  },

  generate: function( collection, days ) {
    var dates = this.datesFromTodayTo( days )

    var links = collection.map( function( airport ) {
      return this.createLinks( airport.code, dates )
    }.bind( this ))

    return [].concat.apply([], links);
  },

  datesFromTodayTo: function( number ) {
    var numberOfDaysArr = new Array( number ).fill( null );

    return numberOfDaysArr.map( ( el, i ) => {
      return moment().add( i, "d" ).format( "YYYY-MM-DD" );
    })
  },

  // Look to use map in here
  // createLinks: function( code, dates ) {
  //   var links = [];
  //
  //   dates.forEach( ( date, i ) => {
  //
  //     var datesSubset = dates.slice( i, dates.length )
  //
  //     datesSubset.forEach( ( dateSubset, i ) => {
  //       var link = "https://www.google.co.uk/flights/#search;f=EDI;t=" + code + ";d=" + date + ";r=" + dateSubset + ""
  //       links.push( link )
  //     })
  //
  //   })
  //   return links
  // }

  createLinks: function( code, dates ) {
      var links = [];

      dates.forEach( ( date, i ) => {

        var datesSubset = dates.slice( i, dates.length )

        datesSubset.forEach( ( dateSubset, i ) => {
          if ( dateSubset !== date ) {
            var link = {
              path: "https://www.google.co.uk/flights/#search;f=EDI;t=" + code + ";d=" + date + ";r=" + dateSubset + "",
              from: "EDI",
              depDate: date,
              retDate: dateSubset,
              to: code
            }
            links.push( link )
          }
        })

      })
      return links

  }

}
