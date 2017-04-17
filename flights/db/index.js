var MongoClient = require('mongodb').MongoClient;

module.exports = {

  all: function( callback ) {
    MongoClient.connect( 'mongodb://localhost:27017/flights', function( err, db ) {
      if ( db ) {
        var collection = db.collection( "airports" );
        collection.find().toArray(function(err, docs){
          callback(docs);
          db.close();
        });
      }
    })
  },

  findOne: function( code, callback ) {
    var code = code.toUpperCase();

    MongoClient.connect( 'mongodb://localhost:27017/flights', function( err, db ) {
      if ( db ) {
        var collection = db.collection( "airports" );
        var airport = collection.findOne( { code: code } ).then( ( doc ) => {
            callback( doc )
            db.close();
        })

      }
    })
  },

  addOne: function( code, route, callback ) {
    MongoClient.connect( 'mongodb://localhost:27017/flights', function( err, db ) {
      if ( db ) {
        var collection = db.collection( "airports" );
        var doc = collection.findOneAndUpdate( { code: code }, {
          $push: {
            routes: route
          }
        })
        db.close();

      }
    })
  }



}
