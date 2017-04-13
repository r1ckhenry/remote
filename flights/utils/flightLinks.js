module.exports = {

  generate: function( collection ) {
    return collection.map( function( item ) {
      return "https://www.google.co.uk/flights/#search;f=EDI;t=" + item.code + ";d=2017-12-29;r=2018-01-10"
    })
  }

}
