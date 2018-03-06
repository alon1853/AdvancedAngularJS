const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const bodyParser = require('body-parser');

const PORT = 3015
const url = "mongodb://localhost:27017/"
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io').listen(server);

server.listen(3001);

var count = 0;
io.sockets.on('connection', function(client) {
    var interval = setInterval(function(client) {
    client.emit('seconds', {data: ++count});
   }, 1000, client);
});

app.use(express.static('app/src'))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/get_post_by_id', function (req, res) {
    var postid = req.body.id;
    console.log(postid);
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("EatHealthy");
    dbo.collection("Posts").aggregate([
        { $match: {
            _id:ObjectID(req.params.id)
        }
        },
        { $lookup:
           {
             from: 'Clients',
             localField: 'ClientID',
             foreignField: '_id',
             as: 'client'
           }
         },
         { $lookup:
            {
              from: 'Categories',
              localField: 'CategoryID',
              foreignField: '_id',
              as: 'category'
            }
          },
          { 
            $project : { 
                "_id" : 1,
                "Title": 1,
                "Content": 1,
                "client.Name" : { "$arrayElemAt": [ "$client", 0 ] },
                "category" : { "$arrayElemAt": [ "$category", 0 ] },
                "CreationDate" : 1
            }
            },
            { 
                $project : { 
                    "_id" : 1,
                    "Title": 1,
                    "Content": 1,
                    "client.FirstName" : 1,
                    "category.Name" : 1,
                    "CreationDate" : 1
            },
        }]).toArray(function(err, result) {
    if (err) throw err;
    res.json(result);
    console.log(result);
    db.close();
    });
    });
})

app.get('/posts', function (req, res) {
    // MongoClient.connect(url, function (err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("EatHealthy");
    //     dbo.collection("Posts").aggregate([
    //         {
    //             $lookup:
    //                 {
    //                     from: 'Clients',
    //                     localField: 'ClientID',
    //                     foreignField: '_id',
    //                     as: 'client'
    //                 }
    //         },
    //         {
    //             $lookup:
    //                 {
    //                     from: 'Categories',
    //                     localField: 'CategoryID',
    //                     foreignField: '_id',
    //                     as: 'category'
    //                 }
    //         },
    //         {
    //             $project: {
    //                 "_id": 1,
    //                 "Title": 1,
    //                 "Content": 1,
    //                 "client.Name": { "$arrayElemAt": ["$client", 0] },
    //                 "category": { "$arrayElemAt": ["$category", 0] },
    //                 "CreationDate": 1
    //             }
    //         },
    //         {
    //             $project: {
    //                 "_id": 1,
    //                 "Title": 1,
    //                 "Content": 1,
    //                 "client.FirstName": 1,
    //                 "category.Name": 1,
    //                 "CreationDate": 1
    //             },
    //         }]).toArray(function (err, result) {
    //             if (err) throw err;
    //             res.json(result);
    //             console.log(result);
    //             db.close();
    //         });
    // });
    const result = [{
        id: 1,
        category: {
            name: "Category Name"
        },
        creationDate: new Date(),
        client: {
            clientName: "Hanan"
        },
        comments: [{
            client: {
                clientName: "Hanan"
            },
            creationDate: new Date(),
            content: "This is a long long content"
        }],
        title: "Post Title",
        content: "This is a long long content"
    },
    {
        id: 2,
        category: {
            name: "Category Name #2"
        },
        creationDate: new Date(),
        client: {
            clientName: "Liran"
        },
        comments: [{
            client: {
                clientName: "Liran"
            },
            creationDate: new Date(),
            content: "This is a long long content"
        }],
        title: "Post Title",
        content: "This is a long long content"
    }];
    res.send(JSON.stringify(result));
})

app.get("/clients", function(req, res) {
    //var body = req.body;
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("EatHealthy");
    dbo.collection("Clients").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
        db.close();
      });
});
})

app.delete('/posts/:id', function (req, res) {
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("EatHealthy");
    dbo.collection("Posts").deleteOne({_id : req.params.id}, function(err, obj) {
        if (err) throw err;
        console.log("Post Document deleted");
        db.close();
      });
});
})

//app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.listen(PORT, () => console.log('Server is running on port ' + PORT + '...'))