var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

  var MarkerSchema = new Schema({
    name : {
        type :  String, required: true
    },
    address: {
        type :  String, required: true
    },
    lat : {
        type : Number, required: true
    },
    long : {
        type : Number, required: true
    },
    type : {
        type :  String, required: true
    }
  });

exports.MarkerSchema = MarkerSchema;
module.exports = mongoose.model('Marker', MarkerSchema);

