var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

  var ClientSchema = new Schema({
    userName : {
        type :  String, required: true
    },
    firstName: {
        type :  String, required: true
    },
    lastName : {
        type : String, required: true
    },
    gender : {
        type : String , required: true
    },
    isAdmin : {
        type :  Boolean, required: true
    },
    posts : [{
         type: Schema.Types.ObjectId, ref: 'Post' 
    }],
    // need to ADD LIST OF POSTS ,LIST OF COMMENTS
    comments : [{
         type: Schema.Types.ObjectId, ref: 'Comment' 
    }]
  });

exports.ClientSchema = ClientSchema;
module.exports = mongoose.model('Client', ClientSchema);

