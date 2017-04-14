const airports = require('airport-codes').toJSON();
const MongoClient = require('mongodb').MongoClient;
const db = require( "./db/index" );

// db.addOne( "EDI", { price: 6133,
//   depTime: '18:00',
//   arrTime: '09:40+2',
//   duration: '30h 40m' } )

MongoClient.connect( 'mongodb://localhost:27017/flights', ( err, db ) => {
  if ( db ) {

    db.collection( "airports" ).drop()

    airports.forEach( (airport) => {
      if ( airport.iata ) {
        db.collection( "airports" ).insertOne( {
          code: airport.iata,
          name: airport.name,
          latitude: airport.latitude,
          longitude: airport.longitude,
          routes: []
        }, ( err, result ) => {
          console.log( "Inserted airport: " + airport.name );
        })
      }
    })

    db.close()

  }
})
