var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

  var CommentSchema = new Schema({
    content: {
        type :  String, required: true
    },
    creationDate : {
        type : Date, default: Date.now
    },
    post : {
        type: Schema.Types.ObjectId, ref: 'Post' 
    },
    client : {
        type: Schema.Types.ObjectId, ref: 'Client' 
    },
  });

exports.CommentSchema = CommentSchema;
module.exports = mongoose.model('Comment', CommentSchema);

