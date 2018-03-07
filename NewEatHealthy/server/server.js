// const express = require('express')
// const app = express()
// const MongoClient = require('mongodb').MongoClient
// const ObjectID = require('mongodb').ObjectID
// const bodyParser = require('body-parser');
// const DB = require('./accessDB').AccessDB

// const PORT = 3015
// const url = "mongodb://localhost:27017/"
// const http = require('http')
// const server = http.createServer(app)
// const io = require('socket.io').listen(server);

// server.listen(3001);

// io.sockets.on('connection', function(client) {
//     var count = 0;
//     var interval = setInterval(function(client) {
//     client.emit('seconds', {data: ++count});
//    }, 1000, client);
// });


// app.use(express.static('app/src'))
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// // POST BY ID
// app.get('/posts/:id', function (req, res) 
// {
//     console.log(req.body);
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("EatHealthy");
//     dbo.collection("Posts").aggregate([
//         { $match: {
//             _id:ObjectID(req.params.id)
//         }
//         },
//         { $lookup:
//            {
//              from: 'Clients',
//              localField: 'ClientID',
//              foreignField: '_id',
//              as: 'client'
//            }
//          },
//          { $lookup:
//             {
//               from: 'Categories',
//               localField: 'CategoryID',
//               foreignField: '_id',
//               as: 'category'
//             }
//           },
//           { 
//             $project : { 
//                 "_id" : 1,
//                 "Title": 1,
//                 "Content": 1,
//                 "client.Name" : { "$arrayElemAt": [ "$client", 0 ] },
//                 "category" : { "$arrayElemAt": [ "$category", 0 ] },
//                 "CreationDate" : 1
//             }
//             },
//             { 
//                 $project : { 
//                     "_id" : 1,
//                     "Title": 1,
//                     "Content": 1,
//                     "client.FirstName" : 1,
//                     "category.Name" : 1,
//                     "CreationDate" : 1
//             },
//         }]).toArray(function(err, result) {
//     if (err) throw err;
//     res.json(result);
//     console.log(result);
//     db.close();
//     });
//     });
// })

// // LIST POST
// app.get('/posts', function (req, res) {
//     // MongoClient.connect(url, function (err, db) {
//     //     if (err) throw err;
//     //     var dbo = db.db("EatHealthy");
//     //     dbo.collection("Posts").aggregate([
//     //         {
//     //             $lookup:
//     //                 {
//     //                     from: 'Clients',
//     //                     localField: 'ClientID',
//     //                     foreignField: '_id',
//     //                     as: 'client'
//     //                 }
//     //         },
//     //         {
//     //             $lookup:
//     //                 {
//     //                     from: 'Categories',
//     //                     localField: 'CategoryID',
//     //                     foreignField: '_id',
//     //                     as: 'category'
//     //                 }
//     //         },
//     //         {
//     //             $project: {
//     //                 "_id": 1,
//     //                 "Title": 1,
//     //                 "Content": 1,
//     //                 "client.Name": { "$arrayElemAt": ["$client", 0] },
//     //                 "category": { "$arrayElemAt": ["$category", 0] },
//     //                 "CreationDate": 1
//     //             }
//     //         },
//     //         {
//     //             $project: {
//     //                 "_id": 1,
//     //                 "Title": 1,
//     //                 "Content": 1,
//     //                 "client.FirstName": 1,
//     //                 "category.Name": 1,
//     //                 "CreationDate": 1
//     //             },
//     //         }]).toArray(function (err, result) {
//     //             if (err) throw err;
//     //             res.json(result);
//     //             console.log(result);
//     //             db.close();
//     //         });
//     // });
//     const result = [{
//         id: 1,
//         category: {
//             name: "Car"
//         },
//         creationDate: new Date(),
//         client: {
//             clientName: "Hanan"
//         },
//         comments: [{
//             client: {
//                 clientName: "Hanan"
//             },
//             creationDate: new Date(),
//             content: "This is a long long content"
//         }],
//         title: "Post Title",
//         content: "This is a long long content"
//     },
//     {
//         id: 2,
//         category: {
//             name: "Animal"
//         },
//         creationDate: new Date(),
//         client: {
//             clientName: "Liran"
//         },
//         comments: [{
//             client: {
//                 clientName: "Liran"
//             },
//             creationDate: new Date(),
//             content: "This is a long long content"
//         }],
//         title: "Post Title",
//         content: "This is a long long content"
//     }];
//     res.send(JSON.stringify(result));
// })

// // DELETE POST
// app.delete('/posts/:id', function (req, res) {
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("EatHealthy");
//     dbo.collection("Posts").deleteOne({_id : req.params.id}, function(err, obj) {
//         if (err) throw err;
//         console.log("Post Document deleted");
//         db.close();
//       });
// });
// })

// // UPDATE POST 
// app.put('/posts/put/:id', function (req, res) {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("EatHealthy");
//         var myquery = {_id:ObjectID(req.params.id)};
//         var newvalues = { $set: {Gender: req.body.gender, FirstName: req.body.firstName, LastName: req.body.lastName,
//              ClientName: req.body.clientName, Password: req.body.Password, IsAdmin:req.body.isAdmin } };
//         dbo.collection("Posts").updateOne(myquery, newvalues, function(err, res) {
//           if (err) throw err;
//           console.log("1 document updated");
//           db.close();
//         });
//       });
// })

// // iNSERT CLIENT
// app.post('/clients/insert', function (req, res) {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("EatHealthy");
//         var object = { Gender: req.body.gender, FirstName: req.body.firstName, LastName: req.body.lastName,
//              ClientName: req.body.clientName, Password: req.body.Password, IsAdmin:req.body.isAdmin };
//         dbo.collection("Clients").insertOne(object, function(err, res) {
//           if (err) throw err;
//           console.log("1 document updated");
//           db.close();
//         });
//       });
// })

// // UPDATE CLIENT
// app.put('/clients/put/:id', function (req, res) {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("EatHealthy");
//         var myquery = {_id:ObjectID(req.params.id)};
//         var newvalues = { $set: {Gender: req.body.gender, FirstName: req.body.firstName, LastName: req.body.lastName,
//              ClientName: req.body.clientName, Password: req.body.Password, IsAdmin:req.body.isAdmin } };
//         dbo.collection("Clients").updateOne(myquery, newvalues, function(err, res) {
//           if (err) throw err;
//           console.log("1 document updated");
//           db.close();
//         });
//       });
// })

// // DELETE CLIENT
// app.delete('/clients/delete/:id', function (req, res) {
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("EatHealthy");
//     dbo.collection("Clients").deleteOne({_id : req.params.id}, function(err, obj) {
//         if (err) throw err;
//         console.log("Client Document deleted");
//         db.close();
//       });
// });
// })

// // SEARCH CLIENTS
// app.get("/clients/:id", function(req, res) {
//     //var body = req.body;
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("EatHealthy");
//     var myquery = {_id:ObjectID(req.params.id)};
//     dbo.collection("Clients").findOne(myquery, function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         res.json(result);
//         db.close();
//       });
// });
// })

// // LIST CLIENTS
// app.get("/clients", function(req, res) {
//     //var body = req.body;
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("EatHealthy");
//     dbo.collection("Clients").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         res.json(result);
//         db.close();
//       });
// });
// })

// // iNSERT Category
// app.post('/categories/insert', function (req, res) {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("EatHealthy");
//         var object = { Name: req.body.name };
//         dbo.collection("Categories").insertOne(object, function(err, res) {
//           if (err) throw err;
//           console.log("Category document added");
//           db.close();
//         });
//       });
// })

// // UPDATE Category
// app.put('/categories/put/:id', function (req, res) {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("EatHealthy");
//         var myquery = {_id:ObjectID(req.params.id)};
//         var newvalues = { $set: {Name: req.body.name} };
//         dbo.collection("Categories").updateOne(myquery, newvalues, function(err, res) {
//           if (err) throw err;
//           console.log("Category document updated");
//           db.close();
//         });
//       });
// })

// // DELETE Category
// app.delete('/categories/delete/:id', function (req, res) {
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("EatHealthy");
//     dbo.collection("Categories").deleteOne({_id : req.params.id}, function(err, obj) {
//         if (err) throw err;
//         console.log("Category Document deleted");
//         db.close();
//       });
// });
// })

// // SEARCH Category
// app.get("/categories/:id", function(req, res) {
//     //var body = req.body;
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("EatHealthy");
//     var myquery = {_id:ObjectID(req.params.id)};
//     dbo.collection("Categories").findOne(myquery, function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         res.json(result);
//         db.close();
//       });
// });
// })

// // LIST Category
// app.get("/categories", function(req, res) {
//     //var body = req.body;
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("EatHealthy");
//     dbo.collection("Categories").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         res.json(result);
//         db.close();
//       });
// });
// })

// // iNSERT MARKER
// app.post('/markers/insert', function (req, res) {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("EatHealthy");
//         var object = {Name: req.body.name, Address: req.body.address, lat: req.body.lat,
//             long: req.body.long, type: req.body.type};
//         dbo.collection("Markers").insertOne(object, function(err, res) {
//           if (err) throw err;
//           console.log("1 document updated");
//           db.close();
//         });
//       });
// })

// // UPDATE MARKER
// app.put('/markers/put/:id', function (req, res) {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("EatHealthy");
//         var myquery = {_id:ObjectID(req.params.id)};
//         var newvalues = { $set: {Name: req.body.name, Address: req.body.address, lat: req.body.lat,
//              long: req.body.long, type: req.body.type}};
//         dbo.collection("Markers").updateOne(myquery, newvalues, function(err, res) {
//           if (err) throw err;
//           console.log("1 document updated");
//           db.close();
//         });
//       });
// })

// // DELETE MARKER
// app.delete('/markers/delete/:id', function (req, res) {
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("EatHealthy");
//     dbo.collection("Markers").deleteOne({_id : req.params.id}, function(err, obj) {
//         if (err) throw err;
//         console.log("Client Document deleted");
//         db.close();
//       });
// });
// })

// // SEARCH Markers
// app.get("/markers/:id", function(req, res) {
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("EatHealthy");
//     var myquery = {_id:ObjectID(req.params.id)};
//     dbo.collection("Markers").findOne(myquery, function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         res.json(result);
//         db.close();
//       });
// });
// })

// // LIST MARKER
// app.get("/markers", function(req, res) {
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("EatHealthy");
//     dbo.collection("Markers").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         res.json(result);
//         db.close();
//       });
// });
// })

// //app.listen(3000, () => console.log('Example app listening on port 3000!'))

// app.listen(PORT, () => console.log('Server is running on port ' + PORT + '...'))