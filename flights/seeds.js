const airports = require('airport-codes').toJSON();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect( 'mongodb://localhost:27017/flights', ( err, db ) => {
  if ( db ) {

    db.collection( "airports" ).drop()

    airports.forEach( (airport) => {
      db.collection( "airports" ).insertOne( {
        code: airport.iata,
        name: airport.name,
        latitude: airport.latitude,
        longitude: airport.longitude,
        routes: []
      }, ( err, result ) => {
        console.log( "Inserted airport: " + airport.name );
      })
    })

    db.close()

  }
})
