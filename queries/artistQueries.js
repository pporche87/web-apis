const db = require('../database')

const artistsAll = () => {
	return db.any('Select name FROM artists')
}

const artistById = (id) => {
	return db.one('SELECT name FROM artists WHERE id=$1', id)
}

const artistByName = (name) => {
	return db.any("SELECT name FROM artists WHERE name=$1", name)
}

const artistCreateNew = (name, genre) => {
	db.any(
		"INSERT INTO artists (name, genre) VALUES ($1, $2)", [name, genre]
	)
	return db.any("SELECT name FROM artists WHERE name = $1", name)
}

const artistEdit = (artist, newArtist) => {
	db.any("UPDATE artists SET name=$2 WHERE name =$1", [artist, newArtist])
	return db.any("SELECT name FROM artists WHERE name=$1", newArtist)
}

const artistDelete = (artist) => {
	return db.none("DELETE FROM artists WHERE name=$1", artist)
}

module.exports = {
	artistsAll,
	artistById,
	artistByName,
	artistCreateNew,
	artistEdit,
	artistDelete
}
