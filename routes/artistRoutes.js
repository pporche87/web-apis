const express = require('express')
const router = express.Router()

// GET /artists
// Route for getting all artists
router.get('/', (req, res) => {
	res.json({response: 'You sent me a GET request'})
})

// GET /artists/:id
// Route for getting artist by id
router.get('/:id', (req, res) => {
	res.json({
		response: 'You sent me a GET request for ID ' + req.params.id
	})
})

// GET /artists/:name
// Route for getting artist by name
router.get('/:name', (req, res) => {
	res.json({
		response: 'You sent me a GET request for ID ' + req.params.id
	})
})

// POST /artists
// Route for creating artists
router.post('/', (req, res) => {
	res.json({
		response: 'You sent me a POST request',
		body: req.body
	})
})

// GET /artists/:id/edit
// Route for getting artist by id
router.get('/:id/edit', (req, res) => {
	res.json({
		response: 'You sent me a GET request for ID ' + req.params.id
	})
})

// PUT /artists/:id
// Route for updating artist
router.put('/:id', (req, res) => {
	res.json({
		response: 'You sent me a PUT request for ID ' + req.params.id
	})
})


module.exports = router
