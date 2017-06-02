const pgp = require('pg-promise')(/*options*/)
const db = pgp('postgres://localhost:5432/musicdb')

const albumsAll = () => {
	return db.any('Select title FROM albums')
}

const albumById = (id) => {
	return db.one('SELECT title FROM albums WHERE id=$1', id)
}

const albumByName = (name) => {
	return db.any("SELECT title FROM albums WHERE title=$1", name)
}

const albumCreateNew = (title, year) => {
	db.any(
		"INSERT INTO albums (title, year) VALUES ($1, $2)", [title, year]
	)
	return db.any("SELECT title FROM albums WHERE title = $1", title)
}

const albumEdit = (album, newAlbum) => {
	db.any("UPDATE albums SET title=$2 WHERE title=$1", [album, newAlbum])
	return db.any("SELECT title FROM albums WHERE title=$1", newAlbum)
}

const albumDelete = (album) => {
	return db.none("DELETE FROM albums WHERE title=$1", album)
}

module.exports = {
	albumsAll,
	albumById,
	albumByName,
	albumCreateNew,
	albumEdit,
	albumDelete
}
