var assert = require('assert');
var MarioChar = require('../models/mariochar');

//describe test
describe('Finding records in Database', function () {

  //hook beforeEach() test run to save record to run test on
  var char;
  beforeEach(function (done) {

    char = new MarioChar({
      name: 'Mike Peterson',
      weight: 55
    });

    char.save().then(function () {
      done();
    });
  });

  //describe it block test run
  it('Find a record in the db', function (done) {

      MarioChar.findOne({_id: char._id}, function (err, data) {
        if (err) {
          throw err;
        }

        assert(data._id.toString() === char._id.toString());
        done();
      });
  });

});
