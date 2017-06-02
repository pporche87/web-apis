const express = require('express')
const router = express.Router()

const db = require('../queries/songQueries')

// get all songs
router.get('/', (req, res) => {
	db.songsAll()
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// get song by id
router.get('/:id', (req, res) => {
	const id = req.params.id
	db.songById(id)
	  .then( (data) => {
	    res.send(data)
	  })
		.catch( (error) => {
	    res.send(error)
	  })
})

// get song by album
router.get('/name/album/:album_id', (req, res) => {
	const album_id = req.params.album_id
	db.songByAlbum(album_id)
	  .then( (data) => {
			res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// get song by artist
router.get('/name/artist/:artist_id', (req, res) => {
	const artist_id = req.params.artist_id
	db.songByArtist(artist_id)
	  .then( (data) => {
			res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// create a new songs
router.post('/new/:title/:length/:track_no', (req, res) => {
	const title = req.params.title
	const length = req.params.length
	const track_no = req.params.track_no
	db.songCreateNew(title, length, track_no)
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// // edit a songs name
router.put('/edit/:song/:newSong', (req, res) => {
	const song = req.params.song
	const newSong = req.params.newSong
	db.songEdit(song, newSong)
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// delete song
router.delete('/delete/:song', (req, res) => {
	const song = req.params.song
	db.songDelete(song)
	  .then( (data) => {
			res.send('Song Deleted')
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

module.exports = router
