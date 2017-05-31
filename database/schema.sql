DROP DATABASE IF EXISTS musicdb;
CREATE DATABASE musicdb;

\c musicdb

DROP TABLE IF EXISTS artists;
CREATE TABLE artists (
id  SERIAL PRIMARY KEY,
name TEXT,
genre TEXT
);

DROP TABLE IF EXISTS albums;
CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  artist_id INTEGER,
  title TEXT,
  year INTEGER
);

DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  title TEXT,
  album_id INTEGER,
  length INTEGER,
  track_no INTEGER
);

CREATE TABLE playlists ();
