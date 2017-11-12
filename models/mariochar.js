var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema and model
var MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

var MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;

