var moment = require( "moment" )

module.exports = {

  generateForOneRoute: function( airport, days ) {
    var dates = this.datesFromTo( days )
    return this.createLinks( airport.code, dates, 8 )
  },

  // generate: function( collection, days ) {
  //   var dates = this.datesFromTo( days )
  //
  //   var links = collection.map( function( airport ) {
  //     return this.createLinks( airport.code, dates )
  //   }.bind( this ))
  //
  //   return [].concat.apply([], links);
  // },

  datesFromTo: function( numberOfDays, date ) {
    var numberOfDaysArr = new Array( numberOfDays ).fill( null );

    return numberOfDaysArr.map( ( el, i ) => {
      if ( date ) {
        return moment( date ).add( i, "d" ).format( "YYYY-MM-DD" );
      }
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

  createLinks: function( toCode, dates, numberOfDays ) {
      var links = []
      dates.forEach( ( date, i ) => {

        var datesToScrape = this.datesFromTo( numberOfDays, date )

        datesToScrape.forEach( ( dateToScrape ) => {
          if ( date !== dateToScrape ) {
            var link = {
              path: "https://www.google.co.uk/flights/#search;f=EDI;t=" + toCode + ";d=" + date + ";r=" + dateToScrape + "",
              from: "EDI",
              depDate: date,
              retDate: dateToScrape,
              to: toCode
            }
            links.push( link )
          }
        })



        // var datesSubset = dates.slice( i, dates.length )
        //
        // datesSubset.forEach( ( dateSubset, i ) => {
        //   if ( dateSubset !== date ) {
        //     var link = {
        //       path: "https://www.google.co.uk/flights/#search;f=EDI;t=" + toCode + ";d=" + date + ";r=" + dateSubset + "",
        //       from: "EDI",
        //       depDate: date,
        //       retDate: dateSubset,
        //       to: toCode
        //     }
        //     links.push( link )
        //   }
        // })

      })

      return links


  }

}
