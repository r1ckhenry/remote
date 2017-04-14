var express = require( 'express' );
var app = express();
var path = require('path');
var fs = require( 'fs' );
// var bodyParser = require('body-parser')

var db = require( "./flights/db/index" );

// app.use( bodyParser.urlencoded({ extended: true }) )

// var flightsController = require( "./flights/index" )

var recursive = require('recursive-readdir');

app.use(express.static('client/build'));

app.get( '/api/airports', function( req, res ) {

  db.findOne( req.query.code,  ( doc ) => {
    res.json( doc )
  })

});

app.get( '/api/airports', function( req, res ) {

  db.all( ( docs ) => {
    res.json( docs )
  })

});


app.get( '/api/media', function( req, res ) {

  recursive('./client/build/media', function (err, files) {

    var media = files
    res.json( media )
  });

});

app.get( '*', function( req, res ) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen( 3030, function() {
  console.log( 'listening on 3030!' )
});
