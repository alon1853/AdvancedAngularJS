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


app.get('/searchClients/:userName/:firstName/:lastName', api.searchClients)

app.get('/searchPosts/:title/:content/:date', api.searchPosts)


// LIST Post
app.get("/posts", api.posts);

// iNSERT Post
app.post('/posts/insert', api.addPost)

// UPDATE Post
app.put('/posts/edit/:id', api.editPost)

// DELETE Post
app.delete('/posts/delete/:id', api.deletePost)

// SEARCH Post
app.get("/posts/:id", function(req, res) {
})

// iNSERT CLIENT
app.post('/clients/insert', api.addClient);

// UPDATE CLIENT
app.put('/clients/edit/:id', api.editClient);

// DELETE CLIENT
app.delete('/clients/delete/:id', api.deleteClient);

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
//app.post('/markers/insert', api.addMarker)

// UPDATE MARKER
app.put('/markers/edit/:id', api.editMarker)

// DELETE MARKER
app.delete('/markers/delete/:id', api.deleteMarker)

//app.post('/comments/insert', api.addComment)

// LIST MARKER
app.get("/markers", api.markers);

//app.listen(3000, () => console.log('Example app listening on port 3000!'))

// login
app.post('/login', api.login)


app.listen(PORT, () => console.log('Server is running on port ' + PORT + '...'))