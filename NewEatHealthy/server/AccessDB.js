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

  // get all the categories
  getCategories: function(callback) {
    console.log('*** accessDB.getCategories');
    Customer.find({} , function(err, categories) {
      callback(null, categories);
    });
  },

    // get all the categories
    getMarkers: function(callback) {
        console.log('*** accessDB.getMarkers');
        Marker.find({} , function(err, markers) {
          callback(null, markers);
        });
      },

    // get all the categories
    // getClients: function(callback) {
    //     console.log('*** accessDB.getClients');
    //     Client.find({} ,{gender:1,firstName: 1 ,lastName: 1,
    //         clientName: 1 ,password: 1 ,isAdmin: 1, posts: 0, comments: 0} , function(err, clients) {
    //       callback(null, clients);
    //     });
    //   },

    // get all the categories
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

  // insert a  customer
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

//   editCustomer: function(id, req_body, state, callback) {
//     console.log('*** accessDB.editCustomer');

//     var s = {'id': state[0].id, 'abbreviation': state[0].abbreviation, 'name': state[0].name}

//     Customer.findOne({'id': id}, {'_id': 1, 'firstName':1, 'lastName':1, 'city': 1, 'state': 1, 'stateId': 1, 'gender': 1, 'id': 1}, function(err, customer) {
//       if (err) { return callback(err); }

//       customer.firstName = req_body.firstName || customer.firstName;
//       customer.lastName = req_body.lastName || customer.lastName;
//       customer.email = req_body.email || customer.email;
//       customer.address = req_body.address || customer.address;
//       customer.city = req_body.city || customer.city;
//       customer.state = s;
//       customer.stateId = s.id;
//       customer.zip = req_body.zip || customer.zip;
//       customer.gender = req_body.gender || customer.gender;


//       customer.save(function(err) {
//         if (err) { console.log('*** accessDB.editCustomer err: ' + err); return callback(err); }

//         callback(null);
//       });

//     });
//   },

//   // delete a customer
//   deleteCustomer: function(id, callback) {
//     console.log('*** accessDB.deleteCustomer');
//     Customer.remove({'id': id}, function(err, customer) {
//       callback(null);
//     });
//   },

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
}
