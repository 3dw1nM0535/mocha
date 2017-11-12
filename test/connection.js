var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/testaroo', { useMongoClient: true });

//listen for connection error
mongoose.connection.once('open', function () {
  console.log('Connection successfull.');
}).on('error', function (error) {
  console.log('Connection error: ', error);
});