const express = require('express')
const router = express.Router()

const db = require('../queries/artistQueries')

// // get all artists
router.get('/', (req, res) => {
	db.artistsAll()
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// get artist by id
router.get('/:id', (req, res) => {
	const id = req.params.id
	db.artistById(id)
	  .then( (data) => {
	    res.send(data)
	  })
		.catch( (error) => {
	    res.send(error)
	  })
})

// get artist by name
router.get('/name/:name', (req, res) => {
	const name = req.params.name
	db.artistByName(name)
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// create a new artist
router.post('/new/:artist/:genre', (req, res) => {
	const artist = req.params.artist
	const genre = req.params.genre
	db.artistCreateNew(artist, genre)
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(data)
	  })
})

// edit an artists name
router.put('/edit/:artist/:newArtist', (req, res) => {
	const artist = req.params.artist
	const newArtist = req.params.newArtist
	db.artistEdit(artist, newArtist)
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(data)
	  })
})

// delete an artist 
router.delete('/delete/:artist', (req, res) => {
	const artist = req.params.artist
	db.artistDelete(artist)
	  .then( (data) => {
			res.send(data)
	  })
	  .catch( (error) => {
	    res.send(data)
	  })
})

module.exports = router
