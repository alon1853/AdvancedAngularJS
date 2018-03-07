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
    password : {
        type : String, required: true
    },
    gender : {
        type : String , required: true
    },
    isAdmin : {
        type :  Boolean, required: true
    },
    // posts : [{
    //      type: Schema.Types.ObjectId, ref: 'Post' 
    // }],
    // comments : [{
    //      type: Schema.Types.ObjectId, ref: 'Comment' 
    // }]
  });

  ClientSchema.pre('remove', function(next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    console.log("here")
    Post.remove({'client': this._id}).exec();
    Comment.remove({'client': this._id}).exec();
    console.log(ClientSchema)
    next();
});
exports.ClientSchema = ClientSchema;
module.exports = mongoose.model('Client', ClientSchema);

