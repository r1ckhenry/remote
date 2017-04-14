const flightLinks = require( "./flightLinks.js" );
const moment = require( "moment" )

const collection = [
  {
    code: "MAD",
    name: "Madrid Airport"
  },
  {
    code: "STN",
    name: "London Stansted"
  }
]

test( "should generate array of google flights links", () => {
    const expectedResult = [
          "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-04-14;r=2017-04-14",
          "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-04-14;r=2017-04-15",
          "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-04-15;r=2017-04-15",
          "https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-04-14;r=2017-04-14",
          "https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-04-14;r=2017-04-15",
          "https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-04-15;r=2017-04-15",
      ]
    expect( flightLinks.generate( collection, 2 ) ).toEqual( expectedResult )
})

test( "should generate array of consecutive dates from todays date and given a number of days", () => {
    const expectedResult = [
      moment().add( 0, "d" ).format( "YYYY-MM-DD" ),
      moment().add( 1, "d" ).format( "YYYY-MM-DD" ),
      moment().add( 2, "d" ).format( "YYYY-MM-DD" ) ]
    expect( flightLinks.datesFromTodayTo( 3 ) ).toEqual( expectedResult )
})

test( "should generate all possible date links for a single destination", () => {
    const dates = [ "2017-10-29", "2017-10-30", "2017-11-01" ]
    const expectedResult = [
        "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-10-29;r=2017-10-29",
        "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-10-29;r=2017-10-30",
        "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-10-29;r=2017-11-01",
        "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-10-30;r=2017-10-30",
        "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-10-30;r=2017-11-01",
        "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-11-01;r=2017-11-01",
    ]
    expect( flightLinks.createLinks( "MAD", dates ) ).toEqual( expectedResult )
})
