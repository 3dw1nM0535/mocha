var assert = require('assert');
var MarioChar = require('../models/mariochar');

//describe test run
describe('Delete Records from the DB', function () {

  //hook beforeEach() test run
  beforeEach(function (done) {

    var char = new MarioChar({
      name: 'Nelly Miles',
      weight: 100
    });

    char.save().then(function () {
      done();
    });

  });

  //Create it block test run
  it('Deleting a record from the db', function (done) {

    MarioChar.findOneAndRemove({name: 'Nelly'}, function () {
      MarioChar.findOne({name: 'Nely Miles'}, function (record) {
        assert(record === null);
        done();
      });
    });

  });

});