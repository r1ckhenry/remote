module.exports = {

  getPrice: function( flightString ) {
    var stringPrice = flightString.split( "round" )[0];
    var stringRemoveSymbols = stringPrice.slice( 1, stringPrice.length ).split( "," ).join( "" )
    return Number( stringRemoveSymbols )
  },

  split: function( string ) {
    return string.split( "\n" )
  }

}
