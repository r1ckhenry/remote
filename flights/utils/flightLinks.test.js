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

test( "should generate array of link objects to one single airport", () => {
  const expected = [{"depDate": "2017-04-17", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-04-17;r=2017-04-18", "retDate": "2017-04-18", "to": "MAD"}]
  expect( flightLinks.generateForOneRoute( collection[0], 2 ) ).toEqual( expected )
})

// test( "should split into array of arrays for scraping", () => {
//   var linksForOneRoute = flightLinks.generateForOneRoute( collection[0], 90 )
//   expect( flightLinks.splitRoutesForScraping( linksForOneRoute ).length ).toEqual( 4 )
// })

// test( "should generate array of google flights links", () => {
//     const expectedResult = [{"depDate": "2017-04-14", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-04-14;r=2017-04-14", "retDate": "2017-04-14", "to": "MAD"}, {"depDate": "2017-04-14", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-04-14;r=2017-04-15", "retDate": "2017-04-15", "to": "MAD"}, {"depDate": "2017-04-15", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-04-15;r=2017-04-15", "retDate": "2017-04-15", "to": "MAD"}, {"depDate": "2017-04-14", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-04-14;r=2017-04-14", "retDate": "2017-04-14", "to": "STN"}, {"depDate": "2017-04-14", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-04-14;r=2017-04-15", "retDate": "2017-04-15", "to": "STN"}, {"depDate": "2017-04-15", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=STN;d=2017-04-15;r=2017-04-15", "retDate": "2017-04-15", "to": "STN"}]
//     expect( flightLinks.generate( collection, 2 ) ).toEqual( expectedResult )
// })

// test( "should generate array of consecutive dates from todays date and given a number of days", () => {
//     const expectedResult = ["2017-04-14", "2017-04-15", "2017-04-16"]
//     expect( flightLinks.datesFromTodayTo( 3 ) ).toEqual( expectedResult )
// })

// test( "should generate all possible date links for a single destination", () => {
//     const dates = [ "2017-10-29", "2017-10-30", "2017-11-01" ]
//     const expectedResult = [{"depDate": "2017-10-29", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-10-29;r=2017-10-29", "retDate": "2017-10-29", "to": "MAD"}, {"depDate": "2017-10-29", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-10-29;r=2017-10-30", "retDate": "2017-10-30", "to": "MAD"}, {"depDate": "2017-10-29", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-10-29;r=2017-11-01", "retDate": "2017-11-01", "to": "MAD"}, {"depDate": "2017-10-30", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-10-30;r=2017-10-30", "retDate": "2017-10-30", "to": "MAD"}, {"depDate": "2017-10-30", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-10-30;r=2017-11-01", "retDate": "2017-11-01", "to": "MAD"}, {"depDate": "2017-11-01", "from": "EDI", "path": "https://www.google.co.uk/flights/#search;f=EDI;t=MAD;d=2017-11-01;r=2017-11-01", "retDate": "2017-11-01", "to": "MAD"}]
//     expect( flightLinks.createLinks( "MAD", dates ) ).toEqual( expectedResult )
// })
