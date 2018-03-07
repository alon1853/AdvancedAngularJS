var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId

  var PostSchema = new Schema({
    title : {
        type :  String, required: true
    },
    content: {
        type :  String, required: true
    },
    creationDate : {
        type : Date, default: Date.now
    },
    category : {
        type: Schema.Types.ObjectId, ref: 'Category' 
    },
    client : {
        type: Schema.Types.ObjectId, ref: 'Client' 
    },
    comments : [{
        type: Schema.Types.ObjectId, ref: 'Comment' 
    }]
  });

exports.PostSchema = PostSchema;
module.exports = mongoose.model('Post', PostSchema);

