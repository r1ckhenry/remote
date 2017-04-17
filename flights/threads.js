const spawn = require('threads').spawn;

const numbers = [ [ 2, 4 ], [ 6, 8 ] ];

numbers.forEach( ( nums ) => {

  const thread = spawn(function(input, done) {

    var doubled = input.map( ( num ) => {
      return num * 2
    })
    // Everything we do here will be run in parallel in another execution context.
    // Remember that this function will be executed in the thread's context,
    // so you cannot reference any value of the surrounding code.
    done( doubled );
  });

  thread
    .send( nums )
    // The handlers come here: (none of them is mandatory)
    .on('message', function(response) {
      console.log( response );
      thread.kill();
    })
    .on('error', function(error) {
      console.error('Worker errored:', error);
    })
    .on('exit', function() {
      console.log('Worker has been terminated.');
    });


})
