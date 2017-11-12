var assert = require('assert');
var MarioChar = require('../models/mariochar');

//describe test run
describe('Update Records in DB', function () {

  //hook beforeEach() to save record to update
  var char;
  beforeEach(function (done) {

    char = new MarioChar({
      name: 'Brian Scotch',
      weight: 38
    });

    char.save().then(function () {
      done();
    });

  });

  //create it block tests run
  it ('Updating a record in the db', function (done) {
    MarioChar.findOneAndUpdate({name: 'Brian Scotch'}, {name: 'Boss Budgy'}).then(function () {
      MarioChar.findOne({_id: char._id}, function (err, record) {
        if (err) {
          throw err;
        }

        assert(record.name === 'Boss Budgy');
        done();
      });
    });
  });


});