var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var CategorySchema = new Schema({
  name : {
    type :  String, required: true
  }
});

exports.CategorySchema = CategorySchema;
module.exports = mongoose.model('Category', CategorySchema);

