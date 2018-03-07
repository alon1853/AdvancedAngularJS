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
    console.log(req_body)
    post = new Post();
    post.title = req_body.title
    post.content = req_body.content
    post.creationDate = req_body.creationDate
    post.category = ObjectID(req_body.category._id)
    post.client = ObjectID(req_body.clientId)
    post.comments = req_body.comments
    post._id = new ObjectID(); // The id is calculated by the Mongoose pre 'save'.
    console.log("####after")
    console.log(post);
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
      console.log(posts);
      callback(null, posts);
    });
  },

  login: function(req_body, callback) {
    console.log('*** accessDB.login');
    Client.find({$and: [{userName: req_body.userName}, {password: req_body.password} ]}).exec(function (err, docs) {
    console.log(docs);
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

