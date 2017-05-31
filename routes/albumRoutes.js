const express = require('express')
const router = express.Router()

const pgp = require('pg-promise')(/*options*/)
const db = pgp('postgres://localhost:5432/musicdb')

// get all albums
router.get('/', (req, res) => {
	db.query('SELECT title FROM albums')
		.then( (data) => {
			console.log('DATA:', data)
		})
		.catch( (error) => {
			console.log('ERROR', error)
		})
})

// get an album by id
router.get('/:id', (req, res) => {
	db.query('SELECT title FROM albums WHERE id = 1')
		.then( (data) => {
			console.log('DATA:', data)
		})
		.catch( (error) => {
			console.log('ERROR', error)
		})
})

// get an album by title
router.get('/title/:title', (req, res) => {
	db.query("SELECT title FROM albums WHERE title = 'Kala'")
		.then( (data) => {
			console.log('DATA', data)
		})
		.catch( (error) => {
			console.log('ERROR', error)
		})
})

// add a new album
router.post('/new/:album', (req, res) => {
		db.query(
			"INSERT INTO albums (artist_id, title, year) VALUES (8, 'Continuum', 2006);"
		)
			.then( (data) => {
				db.query("SELECT title FROM albums WHERE title = 'Continuum'")
					.then( (data) => {
						console.log('INSERTED:', data)
					})
					.catch( (error) => {
						console.log('ERROR:', error)
					})
			})
			.catch( (error) => {
				console.log('ERROR:', error)
			})
})

// edit an album
router.put('/:id/edit', (req, res) => {
	db.query("UPDATE albums SET title = 'Continuum Live' WHERE title = 'Continuum'")
	  .then( (data) => {
			db.query("SELECT title FROM albums WHERE title = 'Continuum Live'")
			  .then( (data) => {
			    console.log('Edited Album To: ', data)
			  })
			  .catch( (error) => {
			    console.log('ERROR:', error)
			  })
	  })
	  .catch( (error) => {
	    console.log('ERROR:', error)
	  })
})

// delete an album
router.delete('/:id/delete', (req, res) => {
	db.query("DELETE FROM albums WHERE title = 'Continuum Live'")
	  .then( (data) => {
			console.log('Artist Deleted From Database');
	  })
	  .catch( (error) => {
	    console.log('ERROR:', error)
	  })
})

module.exports = router
