const express = require('express')
const app = express()
const api = require('./api/api')
const bodyParser = require('body-parser');
const DB = require('./AccessDB')

const PORT = 3015
const conn = "mongodb://localhost/EatHealthy"
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io').listen(server);

server.listen(3001);

var db = DB.startup(conn);

io.sockets.on('connection', function(client) {
    var count = 0;
    var interval = setInterval(function(client) {
    client.emit('seconds', {data: ++count});
   }, 1000, client);
});

app.use(express.static('../app/src'))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// POST BY ID
app.get('/posts/:id', function (req, res) // api.
{
})

// LIST POST
// app.get('/posts', )

// DELETE POST
app.delete('/posts/:id', function (req, res) {

})

// UPDATE POST 
app.put('/posts/put/:id', function (req, res) {
})

// iNSERT CLIENT
app.post('/clients/insert', function (req, res) {

})

// UPDATE CLIENT
app.put('/clients/put/:id', function (req, res) {
})

// DELETE CLIENT
app.delete('/clients/delete/:id', function (req, res) {
})

// SEARCH CLIENTS
app.get("/clients/:id", function(req, res) {
})

// LIST CLIENTS
app.get("/clients", api.clients);

// iNSERT Category
app.post('/categories/insert', api.addCategory)

// UPDATE Category
app.put('/categories/edit/:id', api.editCategory)

// DELETE Category
app.delete('/categories/delete/:id', api.deleteCategory)

// SEARCH Category
app.get("/categories/:id", function(req, res) {
})

// LIST Category
app.get("/categories", api.categories);

// iNSERT MARKER
app.post('/markers/insert', api.addMarker)

// UPDATE MARKER
app.put('/markers/edit/:id', api.editMarker)

// DELETE MARKER
app.delete('/markers/delete/:id', api.deleteMarker)

// LIST MARKER
app.get("/markers", api.markers);

//app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.listen(PORT, () => console.log('Server is running on port ' + PORT + '...'))