var mongoose = require('mongoose');

//ES6 promise
mongoose.Promise = global.Promise;

//hook mongo connection before test runs
before(function (done) {

  //connect to database
  mongoose.connect('mongodb://localhost/testaroo', { useMongoClient: true });

  //listen for connection error
  mongoose.connection.once('open', function () {
    console.log('Connection successfull.');
    done();
  }).on('error', function (error) {
    console.log('Connection error: ', error);
  });

});

//Drop collection before each test run
beforeEach(function (done) {
  //Drop collection
  mongoose.connection.collections.mariochars.drop(function () {
    done();
  });
});

