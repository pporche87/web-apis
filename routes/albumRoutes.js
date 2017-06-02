const express = require('express')
const router = express.Router()

const db = require('../queries/albumQueries')

// get all albums
router.get('/', (req, res) => {
	db.albumsAll()
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// get album by id
router.get('/:id', (req, res) => {
	const id = req.params.id
	db.albumById(id)
	  .then( (data) => {
	    res.send(data)
	  })
		.catch( (error) => {
	    res.send(error)
	  })
})

// get album by name
router.get('/name/:name', (req, res) => {
	const name = req.params.name
	db.albumByName(name)
	  .then( (data) => {
			res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// create a new album
router.post('/new/:album/:year', (req, res) => {
	const album = req.params.album
	const year = req.params.year
	db.albumCreateNew(album, year)
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// // edit an albums name
router.put('/edit/:album/:newAlbum', (req, res) => {
	const album = req.params.album
	const newAlbum = req.params.newAlbum
	db.albumEdit(album, newAlbum)
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// delete album
router.delete('/delete/:album', (req, res) => {
	const album = req.params.album
	db.albumDelete(album)
	  .then( (data) => {
			res.send('Album Deleted')
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

module.exports = router
