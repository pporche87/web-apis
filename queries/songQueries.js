const pgp = require('pg-promise')(/*options*/)
const db = pgp('postgres://localhost:5432/musicdb')

const songsAll = () => {
	return db.any('Select title FROM songs')
}

const songById = (id) => {
	return db.one('SELECT title FROM songs WHERE id=$1', id)
}

const songByAlbum = (album_id) => {
	return db.any("SELECT title FROM songs WHERE album_id=$1", album_id)
}

const songByArtist = (artist_id) => {
	return db.any("SELECT title FROM songs WHERE artist_id=$1", artist_id)
}

const songCreateNew = (title, length, track_no) => {
	db.any("INSERT INTO songs (title, length, track_no) VALUES ($1, $2, $3)", [title, length, track_no])
	return db.any("SELECT title FROM songs WHERE title=$1", title)
}

const songEdit = (song, newSong) => {
	db.any("UPDATE songs SET title=$2 WHERE title=$1", [song, newSong])
	return db.any("SELECT title FROM songs WHERE title=$1", newSong)
}

const songDelete = (song) => {
	return db.none("DELETE FROM songs WHERE title=$1", song)
}

module.exports = {
	songsAll,
	songById,
	songByAlbum,
	songByArtist,
	songCreateNew,
	songEdit,
	songDelete
}
