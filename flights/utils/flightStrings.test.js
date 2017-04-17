const flightStrings = require( "./flightStrings.js" );

const flights = [ '£289\nround trip\n\n06:50 – 14:15\nBritish Airways\n7h 25m\n1 stop\n2h 30m in LHR\n',
  '£2,995\nround trip\n\n06:10 – 14:15\nBritish Airways · Iberia\n8h 05m\n1 stop\nChange of airport\n',
  '£436\nround trip\n\n17:30 – 23:35\nIcelandair, British Airways\n6h 05m\n1 stop\n1h 35m in LHR\n',
  '£476\nround trip\n\n08:30 – 15:40\nIcelandair, British Airways\n7h 10m\n1 stop\n2h 35m in LHR\n',
  '£289\nround trip\n\n20:35 – 17:55+1\nBritish Airways\n21h 20m\n1 stop\n16h 40m in LHR\n',
  '£471\nround trip\n\n06:10 – 15:30\nIcelandair, British Airways\n9h 20m\n1 stop\n4h 50m in LGW\n',
  '£471\nround trip\n\n07:10 – 15:30\nIcelandair, British Airways · BA Cityflyer Limited\n8h 20m\n1 stop\nChange of airport\n',
  '£491\nround trip\n\n06:15 – 15:35\nIcelandair, Air France · HOP!\n9h 20m\n1 stop\nChange of airport\n',
  '£495\nround trip\n\n06:15 – 15:50\nIcelandair, Air France · HOP!\n9h 35m\n1 stop\n4h 10m in CDG\n' ]

// test( "should split array by line return", () => {
//     const expectedResult = {"arrTime": "14:15", "depTime": "06:10", "departureDate": "14-05-2017", "duration": "8h 05m", "price": 2995, "returnDate": "16-05-2017", "to": "STN"}
//     expect( flightStrings.convert( "STN", "14-05-2017", "16-05-2017", flights[1] ) ).toEqual( expectedResult )
// })
