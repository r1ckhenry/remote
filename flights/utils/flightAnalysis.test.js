const flightAnalysis = require( "./flightAnalysis" )

const airport = {
  "code": "EDI",
  "name": "Edinburgh",
  "latitude": "55.95",
  "longitude": "-3.3725",
  "routes": [
    {
    "to": "STN",
    "departureDate": "2017-04-18",
    "returnDate": "2017-04-19",
    "price": 104,
    "depTime": "19:35",
    "arrTime": "20:55",
    "duration": "1h 20m"
    },
    {
    "to": "STN",
    "departureDate": "2017-04-18",
    "returnDate": "2017-04-19",
    "price": 111,
    "depTime": "18:15",
    "arrTime": "19:40",
    "duration": "1h 25m"
    },
    {
    "to": "GLA",
    "departureDate": "2017-04-18",
    "returnDate": "2017-04-19",
    "price": 150,
    "depTime": "18:00",
    "arrTime": "19:25",
    "duration": "1h 25m"
    },
    {
    "to": "GLA",
    "departureDate": "2017-04-18",
    "returnDate": "2017-04-19",
    "price": 128,
    "depTime": "14:40",
    "arrTime": "16:05",
    "duration": "1h 25m"
    }
  ]
}

test( "should return avg price of route from airport", () => {
    expect( flightAnalysis.avgPriceOfRouteFromAirport( airport, "STN" ) ).toBe( 107.5 )
})

// test( "should return how much as a % a route is above or below average", () => {
//     expect( flightAnalysis.calcRoutePriceComparedToAverage( airport, airport.routes[0] ) ).toBe( -3 )
// })

test( "should sort by route", () => {
    const expected = {
      "to": "GLA",
      "departureDate": "2017-04-18",
      "returnDate": "2017-04-19",
      "price": 150,
      "depTime": "18:00",
      "arrTime": "19:25",
      "duration": "1h 25m"
    }
    expect( flightAnalysis.sortedFlightPricesFromAirport( airport )[3] ).toEqual( expected )
})

test( "should return cheapest by route", () => {
    const expected = {
      "to": "STN",
      "departureDate": "2017-04-18",
      "returnDate": "2017-04-19",
      "price": 104,
      "depTime": "19:35",
      "arrTime": "20:55",
      "duration": "1h 20m"
    }

    expect( flightAnalysis.sortedFlightPricesFromAirport( airport )[0] ).toEqual( expected )
})
