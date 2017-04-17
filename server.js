var express = require( 'express' );
var app = express();
var path = require('path');
var fs = require( 'fs' );
var recursive = require('recursive-readdir');

app.use(require('./flights/controller.js'));
app.use(express.static('client/build'));

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
