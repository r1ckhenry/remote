const flightAnalysis = require( "./flightAnalysis" )

const routes = [
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
  "price": 120,
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

test( "should return cheapest flight given airport code", () => {
    const expected = {
      "to": "STN",
      "departureDate": "2017-04-18",
      "returnDate": "2017-04-19",
      "price": 104,
      "depTime": "19:35",
      "arrTime": "20:55",
      "duration": "1h 20m"
    }

    expect( flightAnalysis.cheapestFlightFromAirport( routes, "STN" ) ).toEqual( expected )
})
