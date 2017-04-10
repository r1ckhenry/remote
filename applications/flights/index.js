var DomParser = require('dom-parser');
var parser = new DomParser();

function getPrice( flightString ) {
  var stringPrice = flightString.split( "round" )[0];
  var stringRemoveSymbols = stringPrice.slice( 1, stringPrice.length ).split( "," ).join( "" )
  return Number( stringRemoveSymbols )
}

var casper = require( 'casper' ).create();

var links = [ "https://www.google.co.uk/flights/#search;f=EDI;t=MEL;d=2017-04-29;r=2017-05-19",
  "https://www.google.co.uk/flights/#search;f=EDI;t=NYC;d=2017-04-29;r=2017-05-19",
  "https://www.google.co.uk/flights/#search;f=EDI;t=LON;d=2017-04-29;r=2017-05-19" ];

casper.start().each( links, function(self, link) {

    self.thenOpen( link, function() {

        casper.wait( 3000, function() {

          var htmlString = this.getHTML( "div.OMOBOQD-d-P" );
          var dom = parser.parseFromString(htmlString);

          var routeFlightsHtml = dom.getElementsByTagName( "a" )

          routeFlightsHtml.forEach( function( routeFlightHtml ) {
            var price = getPrice( routeFlightHtml.textContent )

            console.log( price )
          });

        });

    });
});

casper.run();
