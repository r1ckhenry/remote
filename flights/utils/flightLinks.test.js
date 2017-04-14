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
      "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-12-29;r=2018-01-10",
      "https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-12-29;r=2018-01-10"
    ]
    expect( flightLinks.generate( collection ) ).toEqual( expectedResult )
})

test( "should generate array of consecutive dates from todays date and given a number of days", () => {
    const expectedResult = [ "2017-10-29", "2017-10-30", "2017-11-01" ]
    expect( flightLinks.datesFromTo( moment( "2017-10-29" ), 3 ) ).toEqual( expectedResult )
})
