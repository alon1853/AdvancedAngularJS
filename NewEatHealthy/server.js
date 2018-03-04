const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('app/src'))

app.get('/posts', function (req, res) {
	const posts = [{
			id: 1,
			name: 'sdfsdf'
	}]
	
	res.send(JSON.stringify(posts))
})

app.get('/posts/:id', function (req, res) {
	res.send(req.params.id)
})

app.delete('/posts/:id', function (req, res) {
	res.send(req.params.id)
})

app.listen(PORT, () => console.log('Server is running on port ' + PORT + '...'))