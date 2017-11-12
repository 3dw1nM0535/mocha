var assert = require('assert');
var MarioChar = require('../models/mariochar');

//describe block which describe test inside it
describe('Saving Records', function () {

  //create test block in it block
  it('Saving a record to the database', function (done) {

    var char = new MarioChar({
      name: 'Gray Daniels',
      weight: 45
    });

    char.save().then(function () {
      assert(char.isNew === false);
      done();
    });
  });
});
