const flightLinks = require( "./flightLinks.js" );

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
