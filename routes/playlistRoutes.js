const express = require('express')
const router = express.Router()

const db = require('../queries/playlistQueries')

// get all playlists
router.get('/', (req, res) => {
	db.playlistsAll()
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// get a playlist by id
router.get('/:id', (req, res) => {
	const id = req.params.id
	db.playlistById(id)
	  .then( (data) => {
	    res.send(data)
	  })
		.catch( (error) => {
	    res.send(error)
	  })
})

// get all songs in a playlist
router.get('/songs/:title', (req, res) => {
	const title = req.params.title
	db.playlistAllSongs(title)
	  .then( (data) => {
			res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// add a song to a playlist
router.patch('/new/song/:playlist/:song', (req, res) => {
	const playlist = req.params.playlist
	const song = req.params.song
	db.playlistOneSong(playlist, song)
	  .then( (data) => {
			res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// create a new playlist
router.post('/new/:title/:songs', (req, res) => {
	const title = req.params.title
	const songs = req.params.songs
	db.playlistCreateNew(title, songs)
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// // edit a playlist
router.put('/edit/:playlist/:newPlaylist', (req, res) => {
	const playlist = req.params.playlist
	const newPlaylist = req.params.newPlaylist
	db.playlistEdit(playlist, newPlaylist)
	  .then( (data) => {
	    res.send(data)
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

// delete playlist
router.delete('/delete/:playlist', (req, res) => {
	const playlist = req.params.playlist
	db.playlistDelete(playlist)
	  .then( (data) => {
			res.send('Playlist Deleted')
	  })
	  .catch( (error) => {
	    res.send(error)
	  })
})

module.exports = router
