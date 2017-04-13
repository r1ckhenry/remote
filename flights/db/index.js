var MongoClient = require('mongodb').MongoClient;

module.exports = {
  all: function( callback ) {
    MongoClient.connect( 'mongodb://localhost:27017/flights', function( err, db ) {
      if ( db ) {
        var collection = db.collection( "airports" );
        collection.find().toArray(function(err, docs){
          console.log( docs )
          callback(docs.slice( 0, 100 ));
          db.close();
        });
      }
    })
  }
}
