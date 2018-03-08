// Module dependencies
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , Client = require('./models/Client')
  , Category = require('./models/Category')
  , Post = require('./models/Post')
  , Comment = require('./models/Comment')
  , Marker = require('./models/Marker')
  , util = require('util')
  , ObjectID = require('mongodb').ObjectID;

// connect to database
module.exports = {
  // Define class variable
  //myEventID: null,

  // initialize DB
  startup: function(dbToUse) {
    mongoose.connect(dbToUse);
    // Check connection to mongoDB
    mongoose.connection.on('open', function() {
      console.log('We have connected to mongodb');
    });

  },

  // disconnect from database
  closeDB: function() {
    mongoose.disconnect();
  },

    // get all the posts
    // getPosts: function(callback) {
    //   console.log('*** accessDB.getPosts');
    //   Post.find({} , function(err, posts) {
    //     callback(null, posts);
    //   });
    // },

    
  // get all the categories
  getCategories: function(callback) {
    console.log('*** accessDB.getCategories');
    Category.find({} , function(err, categories) {
      callback(null, categories);
    });
  },

    // get all the markers
    getMarkers: function(callback) {
        console.log('*** accessDB.getMarkers');
        Marker.find({} , function(err, markers) {
          callback(null, markers);
        });
      },


    // get all the markers
    // getPosts: function(callback) {
    //   console.log('*** accessDB.getPosts');
    //   Post.find({} , function(err, posts) {
    //     console.log(posts);
    //     callback(null, posts);
    //   });
    // },
  
    // get all the categories
    // getClients: function(callback) {
    //     console.log('*** accessDB.getClients');
    //     Client.find({} ,{gender:1,firstName: 1 ,lastName: 1,
    //         userName: 1 ,password: 1 ,isAdmin: 1, posts: 0, comments: 0} , function(err, clients) {
    //       callback(null, clients);
    //     });
    //   },

    // get all the clients
    getClients: function(callback) {
        console.log('*** accessDB.getClients');

          Client.find().populate("comments").populate("posts").exec(function(err, result) {
            callback(null, result);
          });
      },
    

//   // get the customer summary
//   getCustomersSummary: function(callback) {
//     console.log('*** accessDB.getCustomersSummary');
//     Category.find({}, function(err, customersSummary) {
      
//       callback(null, customersSummary);
//     });
//   },

//   // get a  customer
//   getCustomer: function(id, callback) {
//     console.log('*** accessDB.getCustomer');
//     Customer.find({'id': id}, {}, function(err, customer) {
//       callback(null, customer[0]);
//     });
//   },

insertClient: function (req_body, callback) {
  console.log('*** accessDB.insertClient');
  client = new Client();
  client.userName = req_body.userName
  client.firstName = req_body.firstName
  client.password = req_body.password
  client.lastName = req_body.lastName
  client.gender = req_body.gender
  client.isAdmin = req_body.isAdmin
  //client.posts = [ObjectID("5aa03faa3e8521fa1a8127b2"),ObjectID("5aa04662015141403c19e73e"),ObjectID("5aa04a996d65162974ec1bcf")]
  client._id = new ObjectID(); // The id is calculated by the Mongoose pre 'save'.

  client.save(function (err, client) {
    if (err) { console.log('*** new client save err: ' + err); return callback(err, null); }
    callback(null, client);
  });
},

editClient: function(id, req_body, callback) {
  console.log('*** accessDB.editClient');

  Client.findOne({'_id': id}, {}, function(err, client) {
    if (err) { return callback(err); }

    client.userName = req_body.clientName
    client.firstName = req_body.firstName
    client.password = req_body.password
    client.lastName = req_body.lastName
    client.gender = req_body.gender
    client.isAdmin = req_body.isAdmin

    client.save(function(err) {
      if (err) { console.log('*** accessDB.editClient err: ' + err); return callback(err); }

      callback(null);
    });

  });
},

deleteClient: function(id, callback) {
  console.log('*** accessDB.deleteClient');
  Client.remove({'_id': id}, function(err, client) {
    callback(null);
  });
},

insertPost: function (req_body, callback) {
  console.log('*** accessDB.insertPost');
  post = new Post();
  post.title = req_body.title
  post.content = req_body.content
  post.creationDate = req_body.creationDate
},

//   Category.findOne({'name': post.category}, {'_id': 1, 'name': 1}, function(err, category) {
//     post.category = category;
//     if (err) { return callback(err); }
//     });

//   post._id = new ObjectID(); // The id is calculated by the Mongoose pre 'save'.

//   post.save(function (err, post) {
//     if (err) { console.log('*** new post save err: ' + err); return callback(err); }

//     callback(null, post._id);
//   });
// },


groupGender : function (callback) {
  Client.aggregate([
    {
      $group: {
          _id: '$gender', // grouping key - group by field district
          count: { $sum: 1 }
      }
    }
  ], function(err, result){
    if(err)
    {
      console.log(err);
      callback(err,null);
    }
    console.log(result);
    callback(null,result);
  })
},


groupPost: function (id, callback) {
  console.log('*** accessDB.getPosts');
  Client.find({'_id' : id},{'posts':1}).populate('posts').exec(function(err, posts){
    if(err) 
    {
      console.log(err);
      return callback (err, null)
    }
    console.log("posts of user :" + posts);
    posts.aggregate([
      {
        $group: {
            _id: '$title', // grouping key - group by field district
            count: { $sum: 1 }
        }
    }
    ], function(err, posts){

      console.log("grouped: " + posts)
    })

    // needed = users.filter(function(user){
    //   console.log("posts:" + user)
    //   console.log("onlyposts:" + user.posts)
    // return user.posts;
  // });
  // console.log(needed);
  });
    
  //  console.log(posts);
  //  console.log(docs);
  //  callback(null, docs);
  // Client.findById(id).populate('posts').exec(function(err, docs) {
  //   if(err) 
  //   {
  //     console.log(err);
  //     return callback (err, null)
  //   }
  //   console.log(docs);

  // })
  //   console.log(docs);
  //   callback(null, docs);
},

  insertMarker: function (req_body, callback) {
    console.log('*** accessDB.insertMarker');
    marker = new Marker();
    marker.name = req_body.name
    marker.address = req_body.address
    marker.lat = req_body.lat
    marker.long = req_body.long
    marker.type = req_body.type
    marker._id = new ObjectID(); // The id is calculated by the Mongoose pre 'save'.

    marker.save(function (err, marker) {
      if (err) { console.log('*** new marker save err: ' + err); return callback(err); }

      callback(null, marker._id);
    });
  },

  insertComment: function (req_body, callback) {
    console.log('*** accessDB.insertComment');
    comment = new Comment();
    comment.content = req_body.content
    comment.post = ObjectID(req_body.post._id)
    comment.client = ObjectID(req_body.client._id)
    comment._id = new ObjectID(); // The id is calculated by the Mongoose pre 'save'.

    comment.save(function (err, comment) {
      if (err) { console.log('*** new marker save err: ' + err); return callback(err); }

      callback(null, comment._id);
    });
  },

  searchClients: function (req_params, callback) {
      console.log("parmas" + req_params)
      var atleastOne = false;
      
      var curResult = Client.find();
      if (req_params.firstName != undefined && req_params.firstName != "" && req_params.firstName != "undefined")
      {
        var regFname = new RegExp(req_params.firstName, 'i');
        curResult = curResult.and({ 'firstName': { $regex: regFname }})
      }

      if (req_params.lastName != undefined && req_params.lastName != "" && req_params.lastName != "undefined")
      {
        var regLname = new RegExp(req_params.lastName, 'i');
        curResult = curResult.and({ 'lastName': { $regex: regLname }})
      }

      if (req_params.userName != undefined && req_params.userName != "" && req_params.userName != "undefined")
      {
        var regUser = new RegExp(req_params.userName, 'i');
        curResult = curResult.and({ 'userName': { $regex: regUser }})
      }

      curResult.exec(function(err, docs) {
      if(err) 
      {
        console.log(err);
        return callback (err, null)
      }
      console.log(docs);
      return callback(null, docs);
    });
  },
  searchPosts: function (req_params, callback) {
      console.log("search posts: parmas" + req_params)
      var atleastOne = false;
      
      var curResult = Post.find();
      if (req_params.title != undefined && req_params.title != "" && req_params.title != "undefined")
      {
        var regTitle = new RegExp(req_params.title, 'i');
        curResult = curResult.and({ 'title': { $regex: regTitle }})
      }

      if (req_params.content != undefined && req_params.content != "" && req_params.content != "undefined")
      {
        var regContent = new RegExp(req_params.content, 'i');
        curResult = curResult.and({ 'content': { $regex: regContent }})
      }

      if (req_params.date != undefined && req_params.date != "" && req_params.date != "undefined")
      {
        var regDate = new RegExp(req_params.date, 'i');
        curResult = curResult.and({ 'date': { $regex: regDate }})
      }

      curResult.exec(function(err, docs) {
      if(err) 
      {
        console.log(err);
        return callback (err, null)
      }
      console.log(docs);
      return callback(null, docs);
    });
  },

  editMarker: function(id, req_body, callback) {
    console.log('*** accessDB.editMarker');

    Marker.findOne({'_id': id}, {'_id': 1, 'name': 1, 'address': 1, 'lat': 1, 'long': 1, 'type': 1}, function(err, marker) {
      if (err) { return callback(err); }

      marker.name = req_body.name
      marker.address = req_body.address
      marker.lat = req_body.lat
      marker.long = req_body.long
      marker.type = req_body.type

      marker.save(function(err) {
        if (err) { console.log('*** accessDB.editMarker err: ' + err); return callback(err); }

        callback(null);
      });

    });
  },

  deleteMarker: function(id, callback) {
    console.log('*** accessDB.deleteMarker');
    Marker.remove({'_id': id}, function(err, marker) {
      callback(null);
    });
  },

  insertCategory: function(req_body, callback) {
    console.log('*** accessDB.insertCategoty');
    category = new Category();
    category.name = req_body.name
    category._id = new ObjectID(); // The id is calculated by the Mongoose pre 'save'.

    category.save(function(err, category) {
      if (err) {console.log('*** new category save err: ' + err); return callback(err); }

      callback(null, category._id);
    });
  },

  editCategory: function(id, req_body, callback) {
    console.log('*** accessDB.editCategory');

    Category.findOne({'_id': id}, {'_id': 1, 'name': 1}, function(err, category) {
      if (err) { return callback(err); }

      category.name = req_body.name

      category.save(function(err) {
        if (err) { console.log('*** accessDB.editCategory err: ' + err); return callback(err); }

        callback(null);
      });

    });
  },

  deleteCategory: function(id, callback) {
    console.log('*** accessDB.deleteCategory');
    Category.remove({'_id': id}, function(err, category) {
      callback(null);
    });
  },

  insertPost: function (req_body, callback) {
    console.log('*** accessDB.insertPost');
    post = new Post();
    post.title = req_body.title
    post.content = req_body.content
    post.creationDate = req_body.creationDate
    post.category = ObjectID(req_body.category._id)
    post.client = ObjectID(req_body.clientId)
    post.comments = req_body.comments
    post._id = new ObjectID(); // The id is calculated by the Mongoose pre 'save'.
    post.save(function (err, post) {
      if (err) { console.log('*** new post save err: ' + err); return callback(err); }

      callback(null, post._id);
    });
  },

  editPost: function(id, req_body, callback) {
    console.log('*** accessDB.editPost');

    Post.findOne({'_id': id}, {'_id': 1, 'title': 1, 'content': 1, 'creationDate': 1, 'category': 1, 'client': 1, 'comments': 1}, function(err, post) {
      if (err) { return callback(err); }

      post.title = req_body.title
      post.content = req_body.content
      post.creationDate = req_body.creationDate
      post.category = req_body.category
      post.client = req_body.client
      post.comments = req_body.comments

      post.save(function(err) {
        if (err) { console.log('*** accessDB.editPost err: ' + err); return callback(err); }

        callback(null);
      });

    });
  },

  deletePost: function(id, callback) {
    console.log('*** accessDB.deletePost');
    Post.remove({'_id': id}, function(err, post) {
      callback(null);
    });
  },

  getPosts: function(callback) {
    console.log('*** accessDB.getPosts');
    Post.find().populate("client").populate("category").exec(function(err, posts) {
      callback(null, posts);
    });
  },

  login: function(req_body, callback) {
    console.log('*** accessDB.login');
    Client.find({$and: [{userName: req_body.userName}, {password: req_body.password} ]}).exec(function (err, docs) {
    if (err) { return callback(err); }

      var client = docs[0]
      callback(null, client);

    });
  },
 
}
  // { "_id" : ObjectId("5aa036d43e8521fa1a8127b1"), "client_" : ObjectId("5a9b1e5d009411de018d0c2f"),
  //  "post_" : ObjectId("5a9b25a0009411de018d0c30"), 
  // "content" : "מה אני עושה פה בכלל", "creationDate" : ISODate("2017-10-25T18:30:00Z") }
  // Comment.aggregate([
  //     {$group: {_id: '$post_', comments: {$push: {_id:_id,client_:client,content:content } }}}
  //     // ...
  //     ], function(err, result) {
  //         if (err)
  //            // error handling
  //         Post.populate(result, {path: "_id"}, function(err, ret) {
  //             if(err)
  //                 console.log(err);
  //             else
  //                 console.log(ret);
  //         });
  //});

//   // get a  customer's email
//   getCustomerEmail: function(email, callback) {
//     console.log('*** accessDB.getCustomerEmail');
//     Customer.find({'email': email}, {'_id': 1}, function(err, customer) {
//       callback(null, customer[0]);
//     });
//   },

// // get all the states
//   getStates: function(callback) {
//     console.log('*** accessDB.getStates');
//     State.find({}, {}, function(err, states) {
//       callback(null, states);
//     });
//   },

// // get a state
//   getState: function(stateId, callback) {
//     console.log('*** accessDB.getState');
//     State.find({'id': stateId}, {}, function(err, state) {
//       callback(null, state);
//     });
//   }

