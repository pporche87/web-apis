const express = require('express')
const router = express.Router()

const pgp = require('pg-promise')(/*options*/)
const db = pgp('postgres://localhost:5432/musicdb')

// get all artists
router.get('/', (req, res) => {
	db.query('SELECT name FROM artists')
	  .then( (data) => {
	    console.log('DATA:', data)
	  })
	  .catch( (error) => {
	    console.log('ERROR:', error)
	  })
})

// get artist by id
router.get('/:id', (req, res) => {
	db.query('SELECT name FROM artists WHERE id = 1')
	  .then( (data) => {
	    console.log('DATA:', data)
	  })
	  .catch( (error) => {
	    console.log('ERROR:', error)
	  })
})

// get artist by name
router.get('/name/:name', (req, res) => {
	db.query("SELECT name FROM artists WHERE name = 'M.I.A.'")
	  .then( (data) => {
	    console.log('DATA:', data)
	  })
	  .catch( (error) => {
	    console.log('ERROR:', error)
	  })
})

// add a new artist
router.post('/new/:name', (req, res) => {
	db.query(
		"INSERT INTO artists (name, genre) VALUES ('John Mayer', 'Acoustic Rock');"
	)
	  .then( (data) => {
			db.query("SELECT name FROM artists WHERE name = 'John Mayer'")
			  .then( (data) => {
			    console.log('Inserted: ', data)
			  })
			  .catch( (error) => {
			    console.log('ERROR:', error)
			  })
	  })
	  .catch( (error) => {
	    console.log('ERROR:', error)
	  })
})

// edit an artists name
router.put('/:id/edit', (req, res) => {
	db.query("UPDATE artists SET name = 'Jason Mraz' WHERE name = 'John Mayer'")
	  .then( (data) => {
			db.query("SELECT name FROM artists WHERE name = 'Jason Mraz'")
			  .then( (data) => {
			    console.log('Edited Artist To: ', data)
			  })
			  .catch( (error) => {
			    console.log('ERROR:', error)
			  })
	  })
	  .catch( (error) => {
	    console.log('ERROR:', error)
	  })
})

router.delete('/:id/delete', (req, res) => {
	db.query("DELETE FROM artists WHERE name = 'Jason Mraz'")
	  .then( (data) => {
			console.log('Artist Deleted From Database');
	  })
	  .catch( (error) => {
	    console.log('ERROR:', error)
	  })
})

module.exports = router
