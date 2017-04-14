module.exports = {

  // ["£289","round trip","","06:50 – 14:15","British Airways","7h 25m","1 stop","2h 30m in LHR","",]

  convert: function( flightString ) {
    var flightInfoArr = flightString.split( "\n" );
    var flightInfo = Object.create( null )

    flightInfoArr.forEach( ( info ) => {

      if ( info.includes( "£" ) ) {
        const priceArr = info.split( "" )
        const price = Number( priceArr.slice( 1, priceArr.length ).join( "" ) )
        flightInfo = Object.assign( {}, flightInfo, { price: price } )
      }

      if ( info.includes( ":" ) ) {
        const depTime = info.split( " " )[0]
        const arrTime = info.split( " " )[2]
        flightInfo = Object.assign( {}, flightInfo, { depTime: depTime, arrTime: arrTime } )
      }

      if ( info.includes( "h" ) && info.includes( "m" ) ) {
        flightInfo = Object.assign( {}, flightInfo, { duration: info } )
      }


    })

    return flightInfo
  }

}
