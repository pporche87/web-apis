const db = require('../database')

const playlistsAll = () => {
	return db.any('Select title FROM playlists')
}

const playlistById = (id) => {
	return db.one('SELECT title FROM playlists WHERE id=$1', id)
}

const playlistAllSongs = (title) => {
	return db.any("SELECT songs FROM playlists WHERE title=$1", title)
}

const playlistOneSong = (playlist, song) => {
	 db.any("UPDATE playlists SET song=$2 WHERE title=$1", [playlist, song])
	 return db.any("SELECT song FROM playlists WHERE title=$1", playlist)
}

const playlistCreateNew = (title, songs) => {
	db.any("INSERT INTO playlists (title, songs) VALUES ($1, $2)", [title, songs])
	return db.any("SELECT songs FROM playlists WHERE title=$1", title)
}

const playlistEdit = (playlist, newPlaylist) => {
	db.any("UPDATE playlists SET title=$2 WHERE title=$1", [playlist, newPlaylist])
	return db.any("SELECT title FROM playlists WHERE title=$1", newPlaylist)
}

const playlistDelete = (playlist) => {
	return db.none("DELETE FROM playlists WHERE title=$1", playlist)
}

module.exports = {
	playlistsAll,
	playlistById,
	playlistAllSongs,
	playlistOneSong,
	playlistCreateNew,
	playlistEdit,
	playlistDelete
}
