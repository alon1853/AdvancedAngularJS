const express = require('express')
const app = express()
const PORT = 3020

 app.use(express.static('app/src'))

app.get('/posts', function (req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("EatHealthy");
    dbo.collection("Posts").aggregate([
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
                "client.FirstName" : 1,
                "category.Name" : 1,
                "CreationDate" : 1
            } 
        }]).toArray(function(err, result) {
    if (err) throw err;
    else res.json(result);
    console.log(result);
    db.close();
    });
    });
})

app.post("/get_users_list", function(req, res) {
    var body = req.body;
});

app.get('/posts/:id', function (req, res) {

	res.send(req.params.id)
})

app.delete('/posts/:id', function (req, res) {
	res.send(req.params.id)
})

//app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.listen(PORT, () => console.log('Server is running on port ' + PORT + '...'))